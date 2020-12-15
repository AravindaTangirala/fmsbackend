//import mongoose
const mongoose = require("mongoose");
//schema creation
const feedbackSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    require: true,
  },
  coursename: {
    type: String,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
  comments: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Feedback", feedbackSchema);
