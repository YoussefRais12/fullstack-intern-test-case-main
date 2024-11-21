const express = require("express");

const router = express.Router();

const courseController = require("../controllers/course-controller");

/**
 * Retrieve the list of all courses
 */
router.get("/api/courses", (req, res, next) =>
  courseController.list(req, res, next)
);

/**
 * Get a specific course by its ID
 */
router.get("/api/courses/:courseCode", (req, res, next) =>
  courseController.get(req, res, next)
);

/**
 * Create a new course
 */
router.post("/api/courses", (req, res, next) => {
  courseController.create(req, res, next);
});

/**
 * Update a course by its ID
 */
router.patch("/api/courses/:courseId", (req, res, next) => {
  courseController.update(req, res, next);
});

/**
 * Delete a course by its ID
 */
router.delete("/api/courses/:courseId", (req, res, next) => {
  courseController.remove(req, res, next);
});

module.exports = router;
