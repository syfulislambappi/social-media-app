const { default: mongoose } = require("mongoose");
const Post = require("../model/Post");

exports.getAllPost = async (req, res, next) => {
  try {
    const { page } = req.query;
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await Post.countDocuments({});
    const posts = await Post.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPage: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

exports.getSinglePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

exports.getPostsBySearch = async (req, res, next) => {
  try {
    const { searchQuery, tags } = req.query;
    const title = new RegExp(searchQuery, "i");
    const posts = await Post.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });
    res.status(200).json({ data: posts });
  } catch (error) {
    next(error);
    console.log(error.message);
  }
};

exports.createPost = async (req, res, next) => {
  const post = req.body;
  const newPost = new Post({ ...post, creator: req.userId });

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

    if (!req.userId) return res.status(404).json({ message: "No User found." });

    const post = await Post.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });

    res.status(201).json(updatedPost);
  } catch (error) {
    error.status = 501;
    next(error);
    console.log(error);
  }
};
