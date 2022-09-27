const { StatusCodes } = require("http-status-codes");
import CustomAPIError from "./custom-error";

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
module.exports = UnauthenticatedError;
