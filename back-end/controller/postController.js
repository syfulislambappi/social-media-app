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
