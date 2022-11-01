const jwt = require("jsonwebtoken");

const authMiddleware = async (req, _res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!!token) {
      const decodedData = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = decodedData?.id;
      next();
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = authMiddleware;
