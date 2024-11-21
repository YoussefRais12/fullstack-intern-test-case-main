const mongoose = require("mongoose");

const questionSchema = require("../schemas/question-schema");

module.exports = mongoose.model("Question", questionSchema);
