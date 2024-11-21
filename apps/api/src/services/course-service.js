const CourseModel = require("../db/models/course-model");

/**
 * Retrieve the list of all courses
 * @returns {Promise<Array<Course>>} List of courses
 */
const getAll = () => {
    return CourseModel
        .find({})
        .select("title description code")
        .exec();
};

/**
 * Retrieve a course by its ID
 * @param {String} courseId Course ID
 * @returns {Promise<Course>} Course
 */
const getById = (courseId) => {
    return CourseModel.findById(courseId);
};

/**
 * Retrieve a course by its code
 * @param {String} courseCode Course code
 * @returns {Promise<Course>} Course
 */
const getByCode = (courseCode) => {
    return CourseModel
        .findOne({code: courseCode})
        .select("title description code questions");
};

/**
 * Retrieve courses by code or title
 * @param {String} searchQuery Search query (partial match, case-insensitive)
 * @returns {Promise<Array<Course>>} List of matched courses
 */
const searchCourses = (searchQuery) => {
    const regex = new RegExp(searchQuery, "i"); // Case-insensitive regex
    return CourseModel.find({
      $or: [
        { code: regex },   // Partial match for code
        { title: regex }   // Partial match for title
      ]
    }).select("title description code questions").exec(); // Only return specific fields
  };

/**
 * Create a new course
 * @param {Course} course Course properties
 * @returns {Promise<Course>} Created course
 */
const create = (course) => {
    const newCourse = new CourseModel({
        ...course
    });

    return newCourse.save();
};

/**
 * Update a course
 * @param {String} courseId Course ID
 * @param {Object} partialCourse Course properties to update
 * @returns {Promise<Course>} Updated course
 */
const update = async(courseId, partialCourse) => {
    const {
        code,
        ...allowedUpdates
    } = partialCourse; // Exclude `code` from updates
    await CourseModel.findOneAndUpdate({
        _id: courseId
    }, {
        $set: {
            ...allowedUpdates
        }
    }, {
        upsert: false,
        new: true
    } // Don't create a new document, return the updated one
    );

    return CourseModel
        .findById(courseId)
        .select("title description code");
};

/**
 * Delete a course
 * @param {String} courseId Course ID
 */
const remove = async(courseId) => {
    await CourseModel.deleteOne({_id: courseId});
};

module.exports = {
    getAll,
    getById,
    getByCode,
    searchCourses,
    create,
    update,
    remove
};
