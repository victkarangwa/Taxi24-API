'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
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
    active: DataTypes.BOOLEAN
  }, {});
  Trip.associate = function(models) {
    // associations can be defined here
  };
  return Trip;
};