"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      "Vehicles",
      [
        {
          id: "f8a59c3f-3d33-4d8d-b771-1c63eff0dc32",
          size: 3,
          model: "Carina",
          plate_number: "RAD 234 F",
          mfc_year: "2008",
          active: true,
          createdAt: "2021-12-11T22:00:00.000Z",
          updatedAt: "2021-12-11T22:00:00.000Z",
        },
        {
          id: "8019365e-9b4b-49ee-8fe8-c18e3291801b",
          size: 3,
          model: "Carina",
          plate_number: "RAD 111 X",
          mfc_year: "2011",
          active: true,
          createdAt: "2021-12-11T22:00:00.000Z",
          updatedAt: "2021-12-11T22:00:00.000Z",
        },
        {
          id: "40b41cac-dcac-460e-87ad-073d3c01c147",
          size: 2.7,
          model: "RAV4",
          plate_number: "RAD 901 Z",
          mfc_year: "2014",
          active: true,
          createdAt: "2021-12-11T22:00:00.000Z",
          updatedAt: "2021-12-11T22:00:00.000Z",
        },
        {
          id: "99b5f4dd-ebcb-4896-a980-7c65992d6ac4",
          size: 3,
          model: "Carina",
          plate_number: "RAC 234 S",
          mfc_year: "2008",
          active: true,
          createdAt: "2021-12-11T22:00:00.000Z",
          updatedAt: "2021-12-11T22:00:00.000Z",
        },
        {
          id: "cec77728-531a-4e9b-aad8-5fa0749410ed",
          size: 2.9,
          model: "RAV4",
          plate_number: "RAD 003 A",
          mfc_year: "2015",
          active: true,
          createdAt: "2021-12-11T22:00:00.000Z",
          updatedAt: "2021-12-11T22:00:00.000Z",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Vehicles", null, {});
  },
};
