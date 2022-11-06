const router = require("express").Router();
const {
  getAllPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPostsBySearch,
} = require("../controller/postController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/all", getAllPost);
router.get("/search", getPostsBySearch);
router.post("/create", authMiddleware, createPost);
router.patch("/update/:id", authMiddleware, updatePost);
router.delete("/delete/:id", authMiddleware, deletePost);
router.patch("/:id/likePost", authMiddleware, likePost);
module.exports = router;
