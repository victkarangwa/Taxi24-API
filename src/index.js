import HttpStatus from "http-status";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import Response from "./helpers/Response";
import router from "./routes";

const app = express();
app.use(cors(), helmet());
// app.use("/", router);

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

export default app;
