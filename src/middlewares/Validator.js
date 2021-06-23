import { check, validationResult } from "express-validator";
import Response from "../helpers/Response";

/**
 * @export
 * @class Validator
 */
class Validator {
  /**
   * Validate input
   * @static
   * @returns {object} error description OR return next middleware
   */
  static validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.errors.map((err) => err.msg);
      return Response.errorMessage(res, errorMessage, 400);
    }
    return next();
  };

  /**
   * Validate ID
   * @static
   * @returns {object} errors
   */
  static idRule() {
    return [
      check(
        "id",
        "ID should be valid (ex: 6e4ebc6e-6fb2-4943-a367-8924e779d06b)"
      ).isUUID(),
    ];
  }

  /**
   * Validate distance rules
   * @static
   * @returns {object} errors
   */
  static driverDistanceRules() {
    return [
    //   check(
    //     "driverAddress",
    //     "Driver address should be valid (ex: -1.9563339,30.0627322)"
    //   ).isString(),
      check(
        "location",
        "Location address should be valid (ex: -1.9563339,30.0627322)"
      ).isString(),
    ];
  }
}

export default Validator;
