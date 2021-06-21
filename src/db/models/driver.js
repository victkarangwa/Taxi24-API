'use strict';
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob: DataTypes.DATE,
    vehicle_id: DataTypes.STRING,
    licence_number: DataTypes.STRING,
    licence_exp: DataTypes.DATE,
    working: DataTypes.BOOLEAN,
    rating: DataTypes.DOUBLE
  }, {});
  Driver.associate = function(models) {
    // associations can be defined here
  };
  return Driver;
};