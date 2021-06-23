"use strict";
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    "Trip",
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
      completed: DataTypes.BOOLEAN,
    },
    {}
  );
  Trip.associate = function (models) {
    // associations can be defined here
    Trip.belongsTo(models.Rider, {
      as: "rider",
      foreignKey: "rider_id",
    });
    Trip.belongsTo(models.Driver, {
      as: "driver",
      foreignKey: "driver_id",
    });
    Trip.belongsTo(models.Driver, {
      as: "pickupLocation",
      foreignKey: "pickup_loc_id",
    });
    Trip.belongsTo(models.Driver, {
      as: "dropoffLocation",
      foreignKey: "dropoff_loc_id",
    });
  };
  return Trip;
};
