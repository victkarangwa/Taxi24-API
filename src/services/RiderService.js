import QueryService from "./QueryService";

class RiderService {
  /**
   * Get all riders
   * @static
   * @param {object} req  request object
   * @memberof RiderService
   * @returns {object} all riders data
   */
  static async getAllRiders(req) {
    const allRiders = "";
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
    const rider = "";

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
        const closestDrivers = "";
    
        return closestDrivers;
      }
}
export default RiderService;
