import { v4 as uuid } from "uuid";
import httpStatus from "http-status";
import Response from "../helpers/Response";
import TripService from "../services/TripService";

class TripController {
  /**
   * controller
   * @static
   * @param {object} req  request object
   * @param {object} res  response object
   * @memberof TripController
   * @returns {object} new trip data
   */
  static async createTrip(req, res) {
    const newTripData = await TripService.createTrip(req);

    return Response.successMessage(
      res,
      "Trip Created successfully",
      newTripData,
      httpStatus.CREATED
    );
  }

  /**
   * controller
   * @static
   * @param {object} req  request object
   * @param {object} res  response object
   * @memberof TripController
   * @returns {object} completed trip data
   */
  static async completeTrip(req, res) {
    const completedTripData = await TripService.completeTrip(req);

    return Response.successMessage(
      res,
      "Trip completed successfully",
      completedTripData,
      httpStatus.OK
    );
  }

  /**
   * controller
   * @static
   * @param {object} req  request object
   * @param {object} res  response object
   * @memberof TripController
   * @returns {object} list of all active trips
   */
  static async getActiveTrips(req, res) {
    const activeTrips = await TripService.getActiveTrips(req);

    return Response.successMessage(
      res,
      "All active trips",
      activeTrips,
      httpStatus.OK
    );
  }
}
export default TripController;
