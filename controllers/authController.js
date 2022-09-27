const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Provide all the values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already registered");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.name,
      lastName: user.lastName,
    },
    token,
  });
};

const login = async (req, res) => {
  // return res.send("login");
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Provide all the values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid credentails");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};
const updateUser = async (req, res) => {
  return res.send("updateUser");
};

// export { register, login, updateUser };
module.exports = { register, login, updateUser };
