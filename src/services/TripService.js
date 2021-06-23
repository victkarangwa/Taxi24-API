import { v4 as uuid } from "uuid";
import QueryService from "./QueryService";
import models from "../db/models";

const { Trip, Rider, Location, Driver, Vehicle } = models;

class TripService {
  /**
   * Create a new trip
   * @static
   * @param {object} req  request object
   * @memberof TripService
   * @returns {object} new trip data
   */
  static async createTrip(req) {
    const {
      body: {
        start_time,
        rider_id,
        driver_id,
        pickup_loc_id,
        dropoff_loc_id,
        trip_cost,
      },
    } = req;
    const newTrip = await QueryService.create(Trip, {
      id: uuid(),
      start_time,
      rider_id,
      driver_id,
      pickup_loc_id,
      dropoff_loc_id,
      trip_cost,
      completed: false,
    });
    return newTrip;
  }

  /**
   * Complete a trip
   * @static
   * @param {object} req  request object
   * @memberof TripService
   * @returns {object} completed Trip data
   */
  static async completeTrip(req) {
    const {
      body: { end_time, rating, comment },
      params: { id },
    } = req;
    const completeTrip = await QueryService.update(Trip, [
      {
        end_time,
        rating,
        comment,
        completed: true,
      },
      {
        where: { id },
      },
    ]);

    return completeTrip;
  }

  /**
   * Get all Active trips
   * @static
   * @param {object} req  request object
   * @memberof TripService
   * @returns {object} list of active trips
   */
  static async getActiveTrips(req) {
    const {
      query: { active },
    } = req;
    const activetrips = await QueryService.findAll(Trip, {
      where: { completed: active },
    });

    return activetrips;
  }
}
export default TripService;
