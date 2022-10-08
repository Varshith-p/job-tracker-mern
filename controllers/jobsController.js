const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Provide all the values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = async (req, res) => {
  return res.send("deleteJob");
};
const getAllJobs = async (req, res) => {
  return res.send("getAllJobs");
};
const updateJob = async (req, res) => {
  return res.send("updateJob");
};
module.exports = {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
};
