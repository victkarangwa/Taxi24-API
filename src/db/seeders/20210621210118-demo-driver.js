"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      "Drivers",
      [
        {
          id: "5ae010fe-b6c1-4380-aaae-1670cca5d553",
          firstName: "Didas",
          lastName: "Murokore",
          dob: "1988-10-11T22:00:00.000Z",
          vehicle_id: "f8a59c3f-3d33-4d8d-b771-1c63eff0dc32",
          licence_number: "123423231",
          licence_exp: "2025-01-20T22:00:00.000Z",
          working: true,
          rating: 0,
          location_id: "50cb3ea5-bd76-48e3-ae0c-397747bd3a4a",
          createdAt: "2021-06-11T22:00:00.000Z",
          updatedAt: "2021-06-11T22:00:00.000Z",
        },
        {
          id: "083bd9a3-e779-43df-b5dc-6d3eeae382fc",
          firstName: "Heren",
          lastName: "Kiriku",
          dob: "1996-10-11T22:00:00.000Z",
          vehicle_id: "8019365e-9b4b-49ee-8fe8-c18e3291801b",
          licence_number: "9812013211212",
          licence_exp: "2025-01-20T22:00:00.000Z",
          working: true,
          rating: 0,
          location_id: "2ddeb198-9604-4184-9cfb-293598c2ca88",
          createdAt: "2021-06-11T22:00:00.000Z",
          updatedAt: "2021-06-11T22:00:00.000Z",
        },
        {
          id: "7741139c-0358-45d1-8af8-a9cb83dda12b",
          firstName: "James",
          lastName: "Majyambere",
          dob: "1991-10-11T22:00:00.000Z",
          vehicle_id: "40b41cac-dcac-460e-87ad-073d3c01c147",
          licence_number: "19939302312",
          licence_exp: "2023-01-20T22:00:00.000Z",
          working: false,
          rating: 0,
          location_id: "2ddeb198-9604-4184-9cfb-293598c2ca88",
          createdAt: "2021-06-11T22:00:00.000Z",
          updatedAt: "2021-06-11T22:00:00.000Z",
        },
        {
          id: "a2be0899-b589-41c2-9c88-c20bbd0374a2",
          firstName: "Ghad",
          lastName: "Mugisha",
          dob: "0199-10-11T22:00:00.000Z",
          vehicle_id: "99b5f4dd-ebcb-4896-a980-7c65992d6ac4",
          licence_number: "9812013211212",
          licence_exp: "2025-01-20T22:00:00.000Z",
          working: false,
          rating: 0,
          location_id: "2ddeb198-9604-4184-9cfb-293598c2ca88",
          createdAt: "2021-06-11T22:00:00.000Z",
          updatedAt: "2021-06-11T22:00:00.000Z",
        },
        {
          id: "9d15a328-e176-49c4-90b5-3d320773a3c6",
          firstName: "Hitler",
          lastName: "Kagere",
          dob: "1985-10-11T22:00:00.000Z",
          vehicle_id: "cec77728-531a-4e9b-aad8-5fa0749410ed",
          licence_number: "98712332324",
          licence_exp: "2025-01-20T22:00:00.000Z",
          working: true,
          rating: 0,
          location_id: "7d1e7d4b-0a7a-4e74-bba2-9f67bfaf17f2",
          createdAt: "2021-06-11T22:00:00.000Z",
          updatedAt: "2021-06-11T22:00:00.000Z",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Drivers", null, {});
  },
};
