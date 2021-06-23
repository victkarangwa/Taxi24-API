import express from "express";
import DriverController from "../../controllers/DriverController";
import { doesDriverExist } from "../../middlewares/dataChecker";
import Validator from "../../middlewares/Validator";

const driverRoute = express.Router();

/**
 * @swagger
 *
 * /drivers/all:
 *    get:
 *      summary: get all taxi24 drivers
 *      tags: [Drivers]
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
 * components:
 *    schemas:
 *      driver:
 *        type: object
 *        required:
 *          - offset
 *          - limit
 *
 */

driverRoute.get("/all", DriverController.getAllDrivers);

/**
 * @swagger
 *
 * /drivers/all:
 *    get:
 *      summary: get all taxi24 drivers
 *      tags: [Drivers]
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
 * components:
 *    schemas:
 *      driver:
 *        type: object
 *        required:
 *          - offset
 *          - limit
 *
 */

driverRoute.get("/available", DriverController.getAllAvailableDrivers);

/**
 * @swagger
 *
 * /drivers/route:
 *    get:
 *      summary: get available taxi24 drivers with a specific distance in a specific location
 *      tags: [Drivers]
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
 * components:
 *    schemas:
 *      driver:
 *        type: object
 *        required:
 *          - location
 *          - distance
 *
 */

driverRoute.get(
  "/route",
  Validator.driverDistanceRules(),
  Validator.validateInput,
  DriverController.getDriversInDistance
);

/**
 * @swagger
 *
 * /drivers/:id:
 *    post:
 *      summary: get a specific taxi24 drivers
 *      tags: [Drivers]
 *      requestBody:
 *        required: false
 *      responses:
 *        "201":
 *          description: data retieved successfully
 */

driverRoute.get(
  "/:id",
  Validator.idRule(),
  Validator.validateInput,
  doesDriverExist,
  DriverController.getSpecificDriver
);

export default driverRoute;
