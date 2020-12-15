const express = require("express");
const router = express.Router();
//const mongoose = require("mongoose");
const Feedback = require("../../models/feedback");
const feedbackControllers = require("../controllers/feedbackControllers");
router.get("/", feedbackControllers.get_feedback);
router.post("/feedback_submit", feedbackControllers.post_feedbacksubmit);
router.post("/feedback_summary", feedbackControllers.post_feedbacksummary);
module.exports = router;
