const User = require("../models/User");

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: "there was an error" });
    next(error);
  }
};
const login = async (req, res) => {
  return res.send("login");
};
const updateUser = async (req, res) => {
  return res.send("updateUser");
};
module.exports = {
  register,
  login,
  updateUser,
};
