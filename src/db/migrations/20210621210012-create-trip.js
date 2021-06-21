'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      rider_id: {
        type: Sequelize.STRING
      },
      driver_id: {
        type: Sequelize.STRING
      },
      pickup_loc_id: {
        type: Sequelize.STRING
      },
      dropoff_loc_id: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      },
      rating: {
        type: Sequelize.DOUBLE
      },
      comment: {
        type: Sequelize.TEXT
      },
      trip_cost: {
        type: Sequelize.DOUBLE
      },
      wait_time: {
        type: Sequelize.STRING
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trips');
  }
};