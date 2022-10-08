const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Provide company name"],
      maxlength: 30,
    },
    position: {
      type: String,
      required: [true, "Provide position"],
      maxlength: 50,
    },
    status: {
      type: String,
      enum: ["pending", "interview", "declined"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      required: true,
      default: "Hyderabad",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Provide user details"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Job", JobSchema);
