const router = require("express").Router();
const {
  getAllPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controller/postController");

router.get("/all", getAllPost);
router.post("/create", createPost);
router.patch("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.patch("/:id/likePost", likePost);
module.exports = router;
