const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const choiceSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = choiceSchema;
