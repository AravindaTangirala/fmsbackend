const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Feedback = require("../../models/feedback");

exports.get_feedback = (req, res) => {
  Feedback.find()
    .exec()
    .then((result) => {
      // console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.post_feedbacksubmit = (req, res) => {
  const feedback = new Feedback({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    coursename: req.body.coursename,
    rating: req.body.rating,
  });

  feedback
    .save()
    .then((result) => {
      res.status(200).json({ msg: "successfully posted" });
    })
    .catch((err) => {
      res.status(500).json({ msg: "error occurred" });
    });
};
exports.post_feedbacksummary = (req, res) => {
  const feedback = new Feedback({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    coursename: req.body.coursename,
    rating: req.body.rating,
    comments: req.body.comments,
  });

  feedback
    .save()
    .then((result) => {
      res.status(200).json({ msg: "successfully posted" });
    })
    .catch((err) => {
      res.status(500).json({ msg: "error occurred" });
    });
};
