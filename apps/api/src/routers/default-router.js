const express = require("express");

const router = express.Router();

/**
 * GET /api/health
 */
router.get("/api/health", (req, res, _next) => {
  res.status(200).json({ status: "OK" });
});

/**
 * 404 for non-existing API routes
 */
router.use((req, res, _next) => {
  res.status(404).json({ error: `No route existing for ${req.url}` });
});

/**
 * Errors handling
 */
router.use((error, _req, _res, _next) => {
  console.log(error);

  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  response.status(status).json({
    message: message,
    data: data,
  });
});

module.exports = router;
