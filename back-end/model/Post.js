const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title must be required."],
      min: [10, "Title must be at least 10 characters."],
      max: [100, "Title should not exceeds 100 characters."],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message must be required."],
      min: [50, "Message must be in 50 characters."],
      max: [500, "Message should not exceeds 500 characters."],
      trim: true,
    },
    creator: {
      type: String,
      required: [true, "Creator name must be required."],
      min: [4, "Creator name must be in 4 characters."],
      max: [30, "Creator name should not exceeds 30 characters."],
      trim: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    selectedFile: {
      type: String,
      required: [true, "File must be uploaded."],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

module.exports = Post;
