const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  	/**
	 * Send charges class model
	 */
	class Trip extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 * @param {object} models
		 * @returns {object} function to create associations
		 */
		static associate(models) {
			// define association here
		}
	}
	Trip.init(
		{
      rider_id: DataTypes.STRING,
      driver_id: DataTypes.STRING,
      pickup_loc_id: DataTypes.STRING,
      dropoff_loc_id: DataTypes.STRING,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
      rating: DataTypes.DOUBLE,
      comment: DataTypes.TEXT,
      trip_cost: DataTypes.DOUBLE,
      wait_time: DataTypes.STRING,
      completed: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
    },
		{
			sequelize,
			modelName: 'Trips',
		},
	);
	return Trip;
};


//   Trip.associate = function (models) {
//     // associations can be defined here
//     Trip.belongsTo(models.Rider, {
//       as: "rider",
//       foreignKey: "rider_id",
//     });
//     Trip.belongsTo(models.Driver, {
//       as: "driver",
//       foreignKey: "driver_id",
//     });
//     Trip.belongsTo(models.Driver, {
//       as: "pickupLocation",
//       foreignKey: "pickup_loc_id",
//     });
//     Trip.belongsTo(models.Driver, {
//       as: "dropoffLocation",
//       foreignKey: "dropoff_loc_id",
//     });
//   };
//   return Trip;
// };
