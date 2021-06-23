"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      "Trips",
      [
        {
          id: "0de23e0e-ed7c-42b7-b85a-11baedd97f5a",
          rider_id: "6a36cf50-435d-4817-b0b7-79f0397f4f60",
          driver_id: "a2be0899-b589-41c2-9c88-c20bbd0374a2",
          pickup_loc_id: "2ddeb198-9604-4184-9cfb-293598c2ca88",
          dropoff_loc_id: "f5cc1ae4-0932-4912-b782-268d7929a426",
          start_time: "2021-06-22T22:07:00.000Z",
          end_time: "2021-06-22T22:09:00.000Z",
          rating: 4,
          comment: "Hello World",
          trip_cost: 300,
          completed: true,
          createdAt: "2021-06-23T21:51:38.125Z",
          updatedAt: "2021-06-23T21:54:30.682Z",
        },
        {
          id: "55489690-e6c3-482f-b48a-f90d5aa66cf4",
          rider_id: "6a36cf50-435d-4817-b0b7-79f0397f4f60",
          driver_id: "a2be0899-b589-41c2-9c88-c20bbd0374a2",
          pickup_loc_id: "2ddeb198-9604-4184-9cfb-293598c2ca88",
          dropoff_loc_id: "f5cc1ae4-0932-4912-b782-268d7929a426",
          start_time: "2021-06-22T22:07:00.000Z",
          end_time: null,
          rating: null,
          comment: null,
          trip_cost: 300,
          completed: false,
          createdAt: "2021-06-23T21:03:41.468Z",
          updatedAt: "2021-06-23T21:03:41.468Z",
        },
        {
          id: "aa0ef231-16c9-4577-bb13-da866531dbdf",
          rider_id: "6a36cf50-435d-4817-b0b7-79f0397f4f60",
          driver_id: "a2be0899-b589-41c2-9c88-c20bbd0374a2",
          pickup_loc_id: "2ddeb198-9604-4184-9cfb-293598c2ca88",
          dropoff_loc_id: "f5cc1ae4-0932-4912-b782-268d7929a426",
          start_time: "2021-06-22T22:07:00.000Z",
          end_time: null,
          rating: null,
          comment: null,
          trip_cost: 300,
          completed: false,
          createdAt: "2021-06-23T21:45:32.859Z",
          updatedAt: "2021-06-23T21:45:32.859Z",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete("Trips", null, {});
  },
};
