import { v4 as uuid } from "uuid";
import httpStatus from "http-status";
import Response from "../helpers/Response";
import RiderService from "../services/RiderService";

class RiderController {
  /**
   * controller
   * @static
   * @param {object} req  request object
   * @param {object} res  response object
   * @memberof RiderController
   * @returns {object} all riders data
   */
  static async getAllRiders(req, res) {
    const allRiders = await RiderService.getAllRiders(req);

    return Response.successMessage(
      res,
      "All taxi24 Riders",
      allRiders,
      httpStatus.OK
    );
  }

  /**
   * controller
   * @static
   * @param {object} req  request object
   * @param {object} res  response object
   * @memberof RiderController
   * @returns {object} specific rider data
   */
  static async getSpecificRider(req, res) {
    const rider = await RiderService.getSpecificRider(req);

    return Response.successMessage(res, "Rider info", rider, httpStatus.OK);
  }

  /**
   * controller
   * @static
   * @param {object} req  request object
   * @param {object} res  response object
   * @memberof RiderController
   * @returns {object} specific number of closest drivers to rider
   */
  static async getClosestDriversForRider(req, res) {
    const { drivers } = req.query;
    const closestDrivers = await RiderService.getClosestDriversForRider(req);

    return Response.successMessage(
      res,
      `${drivers} closest drivers available to rider`,
      closestDrivers,
      httpStatus.OK
    );
  }
}
export default RiderController;
