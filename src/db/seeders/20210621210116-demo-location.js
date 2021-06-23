"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      "Locations",
      [
        {
          id: "6b9702e4-14d1-4ad2-b67d-1b756f399ace",
          map_grid: "-1.9628032,30.1170688",
          landmark_name: "Alpha palace",
          zip_code: "00000",
          createdAt: "2021-06-22T22:00:00.000Z",
          updatedAt: "2021-06-22T22:00:00.000Z",
        },
        {
          id: "f5cc1ae4-0932-4912-b782-268d7929a426",
          map_grid: "-1.9452159,30.0611941",
          landmark_name: "Camelia tea house",
          zip_code: "00000",
          createdAt: "2021-06-22T22:00:00.000Z",
          updatedAt: "2021-06-22T22:00:00.000Z",
        },
        {
          id: "2ddeb198-9604-4184-9cfb-293598c2ca88",
          map_grid: "-1.9563339,30.0627322",
          landmark_name: "Serena hotel",
          zip_code: "00000",
          createdAt: "2021-06-22T22:00:00.000Z",
          updatedAt: "2021-06-22T22:00:00.000Z",
        },
        {
          id: "0e74c29c-0cdb-404f-8715-ff0914cbee0a",
          map_grid: "-1.9545556,30.0938534",
          landmark_name: "Radisson Blu Hotel",
          zip_code: "00000",
          createdAt: "2021-06-22T22:00:00.000Z",
          updatedAt: "2021-06-22T22:00:00.000Z",
        },
        {
          id: "b258e531-3d27-4563-92c2-64e36e374519",
          map_grid: "-1.9538248,30.068912",
          landmark_name: "Sawa City Supermarket",
          zip_code: "00000",
          createdAt: "2021-06-22T22:00:00.000Z",
          updatedAt: "2021-06-22T22:00:00.000Z",
        },
        {
          id: "50cb3ea5-bd76-48e3-ae0c-397747bd3a4a",
          map_grid: "-1.9534189,30.0826686",
          landmark_name: "Radio Flash FM",
          zip_code: "00000",
          createdAt: "2021-06-22T22:00:00.000Z",
          updatedAt: "2021-06-22T22:00:00.000Z",
        },
        {
          id: "7d1e7d4b-0a7a-4e74-bba2-9f67bfaf17f2",
          map_grid: "-1.9544804,30.0818961",
          landmark_name:
            "Ministry of Foreign Affairs and International Cooperation",
          zip_code: "00000",
          createdAt: "2021-06-22T22:00:00.000Z",
          updatedAt: "2021-06-22T22:00:00.000Z",
        },
        {
          id: "e23d8d5e-15be-4269-8d4f-2cab9077a2cf",
          map_grid: "-1.9535422,30.0832909",
          landmark_name: "Rwanda Revenue Authority",
          zip_code: "00000",
          createdAt: "2021-06-22T22:00:00.000Z",
          updatedAt: "2021-06-22T22:00:00.000Z",
        },
        {
          id: "ada85346-9ace-470e-a2e2-b722740c1e37",
          map_grid: "-1.9539898,30.0827276",
          landmark_name: "Mother Light Africa",
          zip_code: "00000",
          createdAt: "2021-06-22T22:00:00.000Z",
          updatedAt: "2021-06-22T22:00:00.000Z",
        },
        {
          id: "e23d8d5e-15be-4269-8d4f-2cab9077a1ea",
          map_grid: "-1.9434279,30.0770444",
          landmark_name: "Dove International Montessori School",
          zip_code: "00000",
          createdAt: "2021-06-22T22:00:00.000Z",
          updatedAt: "2021-06-22T22:00:00.000Z",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Locations", null, {});
  },
};
