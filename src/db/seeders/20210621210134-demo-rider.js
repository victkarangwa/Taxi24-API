"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      "Riders",
      [
        {
          id: "d9bcde06-4a67-41d8-9c69-fa20a1fa5046",
          name: "Harriet Furaha",
          gender: "female",
          country: "Rwanda",
          phone: "+250783098712",
          dob: "1986-03-11T22:00:00.000Z",
          address: "Kigali",
          payment_method: "Credit Card",
          location_id: "f5cc1ae4-0932-4912-b782-268d7929a426",
          createdAt: "2021-06-21T22:00:00.000Z",
          updatedAt: "2021-06-21T22:00:00.000Z",
        },
        {
          id: "a9cd545f-a32e-47cb-9997-5f8ab03ec911",
          name: "JMV Hitamo",
          gender: "male",
          country: "Rwanda",
          phone: "+250788111222",
          dob: "1986-03-11T22:00:00.000Z",
          address: "Kigali",
          payment_method: "Credit Card",
          location_id: "f5cc1ae4-0932-4912-b782-268d7929a426",
          createdAt: "2021-06-21T22:00:00.000Z",
          updatedAt: "2021-06-21T22:00:00.000Z",
        },
        {
          id: "f2f48066-b0a3-4f6b-aacf-a6efe426edd2",
          name: "John Mariko",
          gender: "male",
          country: "Rwanda",
          phone: "+250788119922",
          dob: "1997-12-11T22:00:00.000Z",
          address: "Kigali",
          payment_method: "Credit Card",
          location_id: "50cb3ea5-bd76-48e3-ae0c-397747bd3a4a",
          createdAt: "2021-06-21T22:00:00.000Z",
          updatedAt: "2021-06-21T22:00:00.000Z",
        },
        {
          id: "6a36cf50-435d-4817-b0b7-79f0397f4f60",
          name: "Carine Mutoni",
          gender: "female",
          country: "Rwanda",
          phone: "+250722091265",
          dob: "1986-03-11T22:00:00.000Z",
          address: "Kigali",
          payment_method: "Credit Card",
          location_id: "7d1e7d4b-0a7a-4e74-bba2-9f67bfaf17f2",
          createdAt: "2021-06-21T22:00:00.000Z",
          updatedAt: "2021-06-21T22:00:00.000Z",
        },
        {
          id: "d33242b5-01c6-4ce3-a81f-05dfed8f9b9a",
          name: "Benjamin Karekezi",
          gender: "male",
          country: "Rwanda",
          phone: "+250788334422",
          dob: "1991-12-11T22:00:00.000Z",
          address: "Kigali",
          payment_method: "Cash",
          location_id: "e23d8d5e-15be-4269-8d4f-2cab9077a2cf",
          createdAt: "2021-06-21T22:00:00.000Z",
          updatedAt: "2021-06-21T22:00:00.000Z",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Riders", null, {});
  },
};
