import express from "express";
import TripController from "../../controllers/TripController";
import Validator from "../../middlewares/Validator";

const tripRoute = express.Router();

/**
 * @swagger
 *
 * /trips/all:
 *    post:
 *      summary: create new trip
 *      tags: [Trip]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/trip'
 *      responses:
 *        "201":
 *          description: data retieved successfully
 *
 * components:
 *    schemas:
 *      trip:
 *        type: object
 *        required:
 *          - driver_id
 *          - rider_id
 *          - pickupLocId
 *          - dropoffLocId
 *          - startTime
 *          - endTime
 *          - rating
 *          - comment
 *          - tripCost
 *          - waitTime
 *          - completed
 *          - active
 *
 */

tripRoute.post(
  "/new",
  Validator.newTripRules(),
  Validator.validateInput,
  TripController.createTrip
);

/**
 * @swagger
 *
 * /trips/:id/complete:
 *    get:
 *      summary: complete a specific trip
 *      tags: [Trip]
 *      requestBody:
 *        required: false
 *      responses:
 *        "201":
 *          description: data updated successfully
 *
 */

tripRoute.patch("/:id/complete", TripController.completeTrip);

/**
 * @swagger
 *
 * /trips?active=true:
 *    get:
 *      summary: get active taxi24 trips
 *      tags: [Trip]
 *      requestBody:
 *        required: false
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/driver'
 *      responses:
 *        "201":
 *          description: data retieved successfully
 *
 */

tripRoute.get("/", TripController.getActiveTrips);

export default tripRoute;
