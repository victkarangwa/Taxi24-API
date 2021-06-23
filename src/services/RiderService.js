import QueryService from "./QueryService";
import models from "../db/models";
import axios from "axios";

const { Rider, Location, Driver, Vehicle } = models;
const { GOOGLE_API_URL, GOOGLE_MAP_API_KEYS } = process.env;

class RiderService {
  /**
   * Get all riders
   * @static
   * @param {object} req  request object
   * @memberof RiderService
   * @returns {object} all riders data
   */
  static async getAllRiders(req) {
    const allRiders = QueryService.findAll(Rider, {
      include: [
        {
          model: Location,
          as: "riderLocation",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });
    return allRiders;
  }

  /**
   * Get a specific rider
   * @static
   * @param {object} req  request object
   * @memberof RiderService
   * @returns {object} specific rider data
   */
  static async getSpecificRider(req) {
    const {
      params: { id },
    } = req;
    const rider = QueryService.findOne(Rider, {
      where: { id },
      include: [
        {
          model: Location,
          as: "riderLocation",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });

    return rider;
  }

  /**
   * Get closest drivers for a specific driver
   * @static
   * @param {object} req  request object
   * @memberof RiderService
   * @returns {object} specific number of closest drivers to rider
   */
  static async getClosestDriversForRider(req) {
    const {
      query: { drivers },
      params: { id },
    } = req;

    const riderInfo = await QueryService.findOne(Rider, {
      where: { id },
      include: [
        {
          model: Location,
          as: "riderLocation",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });
    const {
      riderLocation: { map_grid: riderLoc },
    } = riderInfo;

    const availableDrivers = await QueryService.findAll(Driver, {
      where: { working: true },
      include: [
        {
          model: Vehicle,
          as: "driverVehicle",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: Location,
          as: "driverLocation",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      raw: true,
      nest: true,
    });
    let locationName;
    const closestDrivers = await Promise.all(
      availableDrivers.map(async (g) => {
        const { map_grid: driverLoc } = g.driverLocation;
        const url = `${GOOGLE_API_URL}?unit=K&origin=${riderLoc}&destination=${driverLoc}&key=${GOOGLE_MAP_API_KEYS}`;
        const googleData = await axios.get(url);
        const driverDistance = googleData.data.routes[0].legs[0].distance.value;
        locationName = googleData.data.routes[0].legs[0].start_address;
        g.distance = driverDistance;
        return g;
      })
    );

    const sortedList = closestDrivers.sort((a, b) => a.distance - b.distance);

    // return a specific closest desired number of drivers
    return [sortedList.slice(0, drivers), locationName];
  }
}
export default RiderService;
