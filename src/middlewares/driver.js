import Response from '../helpers/Response';
import QueryService from '../services/QueryService';
import model from '../db/models';

const { Driver } = model;

/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object} function to check if the phone of the user exists
 */
export async function DoesDriverExist(req, res, next) {
	const {
		params: { id },
	} = req;
	const driver = await QueryService.findOne(Driver, { where: { id } });

	if (!driver) {
		return Response.errorMessage(res, "Driver ID does not exist", 404);
	}
	next();
}
