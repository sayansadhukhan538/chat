const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connected at ---- ${connection.connection.host}`);
  } catch (err) {
    console.log(`error in db connection ${err}`);
  }
};
module.exports = connectDB;
