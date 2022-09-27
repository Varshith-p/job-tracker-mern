const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");
const morgan = require("morgan");

const connectDB = require("./db/connect");

const authRouter = require("./routes/authRoutes");
const jobsRouter = require("./routes/jobsRoutes");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

const cors = require("cors");
app.use(cors());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on the port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
