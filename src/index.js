import HttpStatus from "http-status";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import path from 'path';
import { config } from 'dotenv';
import Response from "./helpers/Response";
import router from "./routes";
config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) =>
  Response.successMessage(res, "TAXI24 APIs", "", HttpStatus.OK)
);
app.use("*", (req, res) =>
  Response.errorMessage(
    res,
    "Oops, this route does not exist",
    HttpStatus.NOT_FOUND
  )
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}...`);
});

module.exports = app;
