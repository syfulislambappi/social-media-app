const router = require("express").Router();
const { healthHandler } = require("./controller");

router.all("/health", healthHandler);

module.exports = router;
