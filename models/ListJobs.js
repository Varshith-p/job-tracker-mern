const mongoose = require("mongoose");

const ListJobsSchema = new mongoose.Schema(
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
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      required: true,
      default: "Bengaluru",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ListJobs", ListJobsSchema);
