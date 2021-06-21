'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rider = sequelize.define('Rider', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    country: DataTypes.STRING,
    phone: DataTypes.STRING,
    dob: DataTypes.DATE,
    address: DataTypes.STRING,
    payment_method: DataTypes.STRING
  }, {});
  Rider.associate = function(models) {
    // associations can be defined here
  };
  return Rider;
};