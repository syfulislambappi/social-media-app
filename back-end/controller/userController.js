const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    delete existingUser.password;
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    error.status = 501;
    next(error);
    console.log(error);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const existingUser = await User.findOne({ email });

    if (!!existingUser)
      return res.status(400).json({ message: "User is already exist." });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password doesn't matched." });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    delete result.password;
    res.status(201).json({ result, token });
  } catch (error) {
    error.status = 501;
    next(error);
    console.log(error);
  }
};
