"use strict";
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define(
    "Driver",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      dob: DataTypes.DATE,
      vehicle_id: DataTypes.STRING,
      licence_number: DataTypes.STRING,
      licence_exp: DataTypes.DATE,
      working: DataTypes.BOOLEAN,
      rating: DataTypes.DOUBLE,
      location_id: DataTypes.STRING,
    },
    {}
  );
  Driver.associate = function (models) {
    // associations can be defined here
    Driver.belongsTo(models.Vehicle, {
      as: "driverVehicle",
      foreignKey: "vehicle_id",
    });
    Driver.belongsTo(models.Location, {
      as: "driverLocation",
      foreignKey: "location_id",
    });
  };
  return Driver;
};
