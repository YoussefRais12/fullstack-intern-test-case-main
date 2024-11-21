const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const courseRouter = require("./routers/course-router");
const questionRouter = require("./routers/question-router");
const defaultRouter = require("./routers/default-router");

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.originalUrl}`);
  
  if (Object.keys(req.body || {}).length > 0) {
    console.log("Body:", JSON.stringify(req.body, null, 2));
  } else {
    console.log("Body: (empty)");
  }
  
  next(); // Pass control to the next middleware or route handler
});


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Content-Type", "application/json");

  next();
});


app.use(courseRouter);
app.use(questionRouter);
app.use(defaultRouter);


mongoose
  .connect("mongodb://admin:password@127.0.0.1:27042/course-catalog", {
    authSource: "admin",
  })
  .then(async (result) => {
    console.log("MongoDB started!");

    app.listen(port, () => {
      console.log(`API running on port ${port} ...`);
    });
  })
  .catch((error) => console.log(error));
