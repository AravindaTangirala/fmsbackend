//import express
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = express.Router();
const Feedback = require("./models/feedback");
const feedbackRoutes = require("./api/routes/feedbackRoute");
//DB Connection
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://admin:admin123@fmsmern.laux6.mongodb.net/fmsmern?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("connected", () => {
  console.log("Database is connected");
});
mongoose.connection.on("error", () => {
  console.log("error ocuured");
});
//initialize app
const app = express();

//port
const port = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(cors());
app.use("/", feedbackRoutes);

//server listening
app.listen(port, () => console.log(`app is listening on ${port}`));
