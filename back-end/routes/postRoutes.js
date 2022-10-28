const router = require("express").Router();
const { getAllPost, createPost } = require("../controller/postController");

router.get("/all", getAllPost);
router.post("/create", createPost);
module.exports = router;
