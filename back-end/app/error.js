exports.notFoundHandler = async (_req, res, next) => {
  try {
    res.status(404).json({ message: "Resource is not found." });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

exports.applicationErrorHandler = (err, _req, res, _next) => {
  if (!!err.status) {
    return res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message });
  }
};
