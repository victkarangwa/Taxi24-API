import { v4 as uuid } from "uuid";
import httpStatus from "http-status";
import Response from "../helpers/Response";
import DriverService from "../services/DriverService";

class DriverController {
  /**
   * controller
   * @static
   * @param {object} req  request object
   * @param {object} res  response object
   * @memberof DriverController
   * @returns {object} drivers data
   */
  static async getAllDrivers(req, res) {
    const allDrivers = await DriverService.getAllDrivers(req);

    return Response.successMessage(
      res,
      "All taxi24 drivers",
      allDrivers,
      httpStatus.OK
    );
  }

  /**
   * controller
   * @static
   * @param {object} req  request object
   * @param {object} res  response object
   * @memberof DriverController
   * @returns {object} available drivers data
   */
  static async getAllAvailableDrivers(req, res) {
    const availableDrivers = await DriverService.getAllAvailableDrivers(req);

    return Response.successMessage(
      res,
      "All taxi24 working drivers",
      availableDrivers,
      httpStatus.OK
    );
  }

  /**
   * controller
   * @static
   * @param {object} req  request object
   * @param {object} res  response object
   * @memberof DriverController
   * @returns {object} available drivers within a specific distance
   */
  static async getDriversInDistance(req, res) {
    const { distance, location } = req.query;
    const driversInDistance = await DriverService.getDriversInDistance(req);
    return Response.successMessage(
      res,
      `All taxi24 drivers within ${distance} KM for ${location}`,
      driversInDistance,
      httpStatus.OK
    );
  }

    /**
   * controller
   * @static
   * @param {object} req  request object
   * @param {object} res  response object
   * @memberof DriverController
   * @returns {object} specific driver info
   */
     static async getSpecificDriver(req, res) {
        const driverInfo = await DriverService.getSpecificDriver(req);
        return Response.successMessage(
          res,
          `Driver info retrieved`,
          driverInfo,
          httpStatus.OK
        );
      }
}
export default DriverController;
