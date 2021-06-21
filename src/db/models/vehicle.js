'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    size: DataTypes.DOUBLE,
    model: DataTypes.STRING,
    plate_number: DataTypes.STRING,
    mfc_year: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
  };
  return Vehicle;
};