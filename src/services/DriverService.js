import QueryService from "./QueryService";

class DriverService {
  /**
   * Get all drivers
   * @static
   * @param {object} req  request object
   * @memberof DriverService
   * @returns {object} drivers data
   */
  static async getAllDrivers(req) {
    const allDrivers = "";
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
    const allAvailableDrivers = "";

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
    const driversInDistance = "";

    return driversInDistance;
  }

  /**
   * Get a specific driver
   * @static
   * @param {object} req  request object
   * @memberof DriverService
   * @returns {object} specific driver data
   */
  static async getSpecificDriver(req) {
    const driver = "";

    return driver;
  }
}
export default DriverService;
