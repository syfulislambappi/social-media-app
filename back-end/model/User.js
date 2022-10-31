const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name must be inserted."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email must be inserted."],
    trim: true,
    unique: [true, "Email must be unique."],
    lowercase: [true, "Email must be in lowercase."],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address.",
    ],
  },
  password: {
    type: String,
    required: [true, "Password must be inserted."],
  },
  id: { type: String },
});

const User = model("User", userSchema);

module.exports = User;
