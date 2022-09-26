const express = require("express");
const app = express();

require("express-async-errors");
require("dotenv").config();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const connectDB = require("./db/connect");

const authRouter = require("./routes/authRoutes");
const jobsRouter = require("./routes/jobsRoutes");

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
