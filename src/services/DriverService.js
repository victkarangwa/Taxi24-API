import QueryService from "./QueryService";
import models from "../db/models";
import axios from "axios";

const { Driver, Location, Vehicle } = models;
const { GOOGLE_API_URL, GOOGLE_MAP_API_KEYS } = process.env;

class DriverService {
  /**
   * Get all drivers
   * @static
   * @param {object} req  request object
   * @memberof DriverService
   * @returns {object} drivers data
   */
  static async getAllDrivers(req) {
    const allDrivers = QueryService.findAll(Driver, {
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
    });
    return allDrivers;
  }

  /**
   * Get all Available drivers
   * @static
   * @param {object} req  request object
   * @memberof DriverService
   * @returns {object} available drivers data
   */
  static async getAllAvailableDrivers(req) {
    const allAvailableDrivers = await QueryService.findAll(Driver, {
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
    });

    return allAvailableDrivers;
  }

  /**
   * Get all Available drivers within a specific distance for a specific location
   * @static
   * @param {object} req  request object
   * @memberof DriverService
   * @returns {object} available drivers in a specific distance data
   */
  static async getDriversInDistance(req) {
    const {
      query: { location, distance },
    } = req;
    const driversInDistance = await QueryService.findAll(Driver, {
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
    const availableDrivers = await Promise.all(
      driversInDistance.map(async (g) => {
        const driverLoc = g.driverLocation.map_grid;
        const url = `${GOOGLE_API_URL}?unit=K&origin=${location}&destination=${driverLoc}&key=${GOOGLE_MAP_API_KEYS}`;
        const googleData = await axios.get(url);
        const driverDistance = googleData.data.routes[0].legs[0].distance.value;
        locationName=googleData.data.routes[0].legs[0].start_address;
        g.distance = driverDistance;
        if (+distance * 1000 >= driverDistance) return g;
      })
    );

    return [availableDrivers.filter((d) => d), locationName];
  }

  /**
   * Get a specific driver
   * @static
   * @param {object} req  request object
   * @memberof DriverService
   * @returns {object} specific driver data
   */
  static async getSpecificDriver(req) {
    const {
      params: { id },
    } = req;
    const driver = QueryService.findOne(Driver, {
      where: { id },
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
    });

    return driver;
  }
}
export default DriverService;
