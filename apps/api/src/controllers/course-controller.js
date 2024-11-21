const courseService = require("../services/course-service");

/**
 * List courses (optionally search by title or code)
 */
const list = async (req, res, next) => {
    try {
      const searchQuery = req.query.search; 
      const courses = searchQuery
        ? await courseService.searchCourses(searchQuery) 
        : await courseService.getAll(); // Default: Get all courses
  
      res.status(200).json(courses);
    } catch (err) {
      next(err);
    }
  };

/**
 * Get a specific course
 */
const get = async(req, res, next) => {
    try {
        const course = await courseService
            .getByCode(req.params.courseCode)
            .select("title description code questions[]");
        res
            .status(200)
            .json(course);
    } catch (err) {
        return next(err);
    }
};

/**
 * Create a course
 */
const create = async(req, res, next) => {
    try {
        const course = await courseService.create(req.body);

        res
            .status(201)
            .json({title: course.title, description: course.description, code: course.code});
    } catch (err) {
        return next(err);
    }
};

/**
 * Update a course
 */
const update = async(req, res, next) => {
    try {
        const course = await courseService.update(req.params.courseId, req.body);

        res
            .status(200)
            .json(course);
    } catch (err) {
        return next(err);
    }
};

/**
 * Remove a course
 */
const remove = async(req, res, next) => {
    try {
        await courseService.remove(req.params.courseId);

        res
            .status(204)
            .json();
    } catch (err) {
        return next(err);
    }
};

module.exports = {
    list,
    get,
    create,
    update,
    remove
};
