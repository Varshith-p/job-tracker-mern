const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.get("/", (req, res) => {
  console.log("Welcome!");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server is listening on the port ${port}...`)
);
