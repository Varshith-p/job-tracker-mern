const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "there was an error" });
};
module.exports = errorHandlerMiddleware;
