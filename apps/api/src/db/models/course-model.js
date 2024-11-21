const mongoose = require("mongoose");

const courseSchema = require("../schemas/course-schema");

module.exports = mongoose.model("Course", courseSchema);
