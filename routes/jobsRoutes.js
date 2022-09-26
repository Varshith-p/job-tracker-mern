const express = require("express");
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
} = require("../controllers/jobsController");

const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").patch(updateJob).delete(deleteJob);

module.exports = router;
