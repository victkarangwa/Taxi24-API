import Response from '../helpers/Response';
import QueryService from '../services/QueryService';
import model from '../db/models';

const { Driver, Rider, Location, Vehicle } = model;

/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object} function to check if the driver exists
 */
export async function doesDriverExist(req, res, next) {
	const {
		params: { id },
	} = req;
	const driver = await QueryService.findOne(Driver, { where: { id } });

	if (!driver) {
		return Response.errorMessage(res, "Driver ID does not exist", 404);
	}
	next();
}

/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object} function to check if the rider exists
 */
 export async function doesRiderExist(req, res, next) {
	const {
		params: { id },
	} = req;
	const rider = await QueryService.findOne(Rider, { where: { id } });

	if (!rider) {
		return Response.errorMessage(res, "Rider ID does not exist", 404);
	}
	next();
}
