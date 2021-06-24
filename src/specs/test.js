const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

chai.use(chaiHttp);
chai.should();

describe("Main app routes", () => {
  it("should return 200 status code", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe("Driver routes", () => {
  it("should get a list of all drivers", (done) => {
    chai
      .request(app)
      .get("/api/v1/drivers/all")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("should get a list of available drivers", (done) => {
    chai
      .request(app)
      .get("/api/v1/drivers/available")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("should get a list of available drivers within 3 KM in -1.9563339,30.0627322", (done) => {
    chai
      .request(app)
      .get("/api/v1/drivers/route?distance=3&location=-1.9563339,30.0627322")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("should get a specific driver", (done) => {
    chai
      .request(app)
      .get("/api/v1/drivers/a2be0899-b589-41c2-9c88-c20bbd0374a2")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("should return error on unfound driver ID", (done) => {
    chai
      .request(app)
      .get("/api/v1/drivers/a2be0899-b589-41c2-9c88-c20bbd0374a1")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

describe("Rider routes", () => {
  it("should get a list of all riders", (done) => {
    chai
      .request(app)
      .get("/api/v1/riders/all")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("should get a specific rider", (done) => {
    chai
      .request(app)
      .get("/api/v1/riders/d9bcde06-4a67-41d8-9c69-fa20a1fa5046")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("should return error on unfound rider ID", (done) => {
    chai
      .request(app)
      .get("/api/v1/riders/1abcde06-4a67-41d8-9c69-fa20a1fa5043")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it("should get 3 closest driver for a specific rider", (done) => {
    chai
      .request(app)
      .get(
        "/api/v1/riders/d9bcde06-4a67-41d8-9c69-fa20a1fa5046/drivers?drivers=3"
      )
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe("Trip routes", () => {
  it("should get a list of all trips", (done) => {
    chai
      .request(app)
      .get("/api/v1/trips")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("should complete a trip successfully", (done) => {
    chai
      .request(app)
      .patch("/api/v1/trips/0de23e0e-ed7c-42b7-b85a-11baedd97f5a/complete")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("should create a new trip successfully", (done) => {
    chai
      .request(app)
      .post("/api/v1/trips/new")
      .send({
        start_time: "2021-06-24T12:00:00",
        rider_id: "d9bcde06-4a67-41d8-9c69-fa20a1fa5046",
        driver_id: "7741139c-0358-45d1-8af8-a9cb83dda12b",
        pickup_loc_id: "ada85346-9ace-470e-a2e2-b722740c1e37",
        dropoff_loc_id: "e23d8d5e-15be-4269-8d4f-2cab9077a1ea",
        trip_cost: 400,
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});
