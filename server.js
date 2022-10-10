const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");
const morgan = require("morgan");

const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

const connectDB = require("./db/connect");

const authRouter = require("./routes/authRoutes");
const jobsRouter = require("./routes/jobsRoutes");
const listJobsRouter = require("./routes/listJobsRoutes");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authenticateUser = require("./middleware/auth");

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

const cors = require("cors");
app.use(cors());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);
app.use("/api/v1/listJobs", authenticateUser, listJobsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

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
