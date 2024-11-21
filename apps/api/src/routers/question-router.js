const express = require("express");

const router = express.Router();

const questionController = require("../controllers/question-controller");

/**
 * Retrieve the questions list from a specific course
 */
router.get("/api/courses/:courseId/questions", (req, res, next) =>
  questionController.list(req, res, next)
);

/**
 * Retrieve a specific question by its ID
 */
router.get("/api/courses/:courseId/questions/:questionId", (req, res, next) =>
  questionController.get(req, res, next)
);

/**
 * Create a new question in a specific course
 */
router.post("/api/courses/:courseId/questions", (req, res, next) => {
  questionController.create(req, res, next);
});

/**
 * Update a question by its ID
 */
router.patch(
  "/api/courses/:courseId/questions/:questionId",
  (req, res, next) => {
    questionController.update(req, res, next);
  }
);

/**
 * Delete a question by its ID
 */
router.delete(
  "/api/courses/:courseId/questions/:questionId",
  (req, res, next) => {
    questionController.remove(req, res, next);
  }
);

/**
 * Duplicate a question in a specific course
 */
router.put(
  "/api/courses/:courseId/questions/:questionId/duplicate",
  (req, res, next) => {
    questionController.duplicate(req, res, next);
  }
);

module.exports = router;
