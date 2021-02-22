const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
const Feedback = require("../../models/feedback");
const Excel = require("exceljs");
//var path = require("path");
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
exports.get_excel = async (req, res, next) => {
  try {
    const users = await Feedback.find({});

    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("My Courses");
    worksheet.columns = [
      { header: "Id", key: "_id", width: 30 },
      { header: "username", key: "username", width: 30 },
      { header: "coursename", key: "coursename", width: 10 },

      { header: "rating", key: "rating", width: 20 },
      { header: "comments", key: "comments", width: 20 },
    ];

    worksheet.addRows(users);
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "Report.xlsx"
    );
    workbook.xlsx.write(res).then((data) => {
      res.end();
      console.log("File write done", data);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
