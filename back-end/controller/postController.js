const { default: mongoose } = require("mongoose");
const Post = require("../model/Post");

exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

exports.createPost = async (req, res, next) => {
  const post = req.body;
  const newPost = new Post(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    error.status = 409;
    next(error);
    console.log(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res
        .status(404)
        .json({ message: "No post is found with that id." });

    const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
    res.status(201).json(updatedPost);
  } catch (error) {
    error.status = 501;
    next(error);
    console.log(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res
        .status(404)
        .json({ message: "No post is found with that id." });
    await Post.findByIdAndRemove(_id);
    res.status(201).json({ message: "Post is deleted successfully." });
  } catch (error) {
    error.status = 501;
    next(error);
    console.log(error);
  }
};

exports.likePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ message: "No post found with that id." });
    const post = await Post.findById(id);
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );
    res.status(201).json(updatedPost);
  } catch (error) {
    error.status = 501;
    next(error);
    console.log(error);
  }
};
