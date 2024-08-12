const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://admin:mango45690@prepinsta.yzcocwv.mongodb.net/?retryWrites=true&w=majority&appName=prepinsta"

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("MongoDB connected successfully");
});

module.exports = db;
