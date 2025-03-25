const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/hashtag";

const connection = async () => {
  try {
    // Connecting to MongoDB with necessary options
    await mongoose.connect(dbUrl, {});
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting to database:", error.message);
    process.exit(1);
  }
};

// Call the connection function
connection();
