const router = require("express").Router();
const { healthHandler } = require("./controller");

router.all("/health", healthHandler);
router.use("/api/v1/post", require("../routes/postRoutes"));

module.exports = router;
