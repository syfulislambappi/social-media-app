exports.healthHandler = async (_req, res, next) => {
  try {
    res.status(200).json({ message: "Successfully works." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
