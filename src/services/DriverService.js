import QueryService from "./QueryService";
import models from "../db/models";

const { Driver, Location, Vehicle } = models;

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
    });
    const grids = driversInDistance.map((g) => g.driverLocation);

    return grids;
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
