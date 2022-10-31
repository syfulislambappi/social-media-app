const router = require("express").Router();
const { healthHandler } = require("./controller");

router.all("/health", healthHandler);
router.use("/api/v1/post", require("../routes/postRoutes"));
router.use("/api/v1/user", require("../routes/userRoutes"));

module.exports = router;
