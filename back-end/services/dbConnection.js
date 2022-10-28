const mongoose = require("mongoose");

const uri = process.env.DB_URI;

const dbConnection = async () => {
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 2000 });
    console.log(`Database is connected.`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
