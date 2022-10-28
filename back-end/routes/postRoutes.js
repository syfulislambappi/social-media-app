const router = require("express").Router();
const { getAllPost } = require("../controller/postController");

router.get("/all", getAllPost);
module.exports = router;
