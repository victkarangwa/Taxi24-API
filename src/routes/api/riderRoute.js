import express from "express";
import RiderController from "../../controllers/RiderController";

const riderRoute = express.Router();

/**
 * @swagger
 *
 * /riders/all:
 *    get:
 *      summary: get list of riders
 *      tags: [Rider]
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
 */

riderRoute.get("/all", RiderController.getAllRiders);


/**
 * @swagger
 *
 * /riders/:id:
 *    get:
 *      summary: Get a specific rider
 *      tags: [Rider]
 *      requestBody:
 *        required: false
 *      responses:
 *        "201":
 *          description: data retieved successfully
 *
 */

riderRoute.get("/:id", RiderController.getSpecificRider);

/**
 * @swagger
 *
 * /riders/:id/driver:
 *    get:
 *      summary: For a specific rider, get a list of closest drivers
 *      tags: [Rider]
 *      requestBody:
 *        required: false
 *      responses:
 *        "201":
 *          description: data retieved successfully
 *
 */

 riderRoute.get("/:id/drivers", RiderController.getClosestDriversForRider);

export default riderRoute;
