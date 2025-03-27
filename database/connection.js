const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://sahil9082811:sahilhashtag%40123@cluster0.ohtbslh.mongodb.net/hashtag?retryWrites=true&w=majority&appName=Cluster0"

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
