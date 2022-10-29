const router = require("express").Router();
const {
  getAllPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/postController");

router.get("/all", getAllPost);
router.post("/create", createPost);
router.patch("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
module.exports = router;
