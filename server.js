const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const port = 9080;

// Enable CORS for specific origin (for your local network or specific IP)
app.use(cors());
// ({
//   origin: "http://192.168.31.33:3000",  // React app on another device
//   methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
//   allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
// })

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection (ensure this file contains the MongoDB setup)
require("./database/connection");

// Import Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/v1/users", userRoutes);

const hashtagRoutes = require("./routes/hashtagRoutes");
app.use("/api/v1/hashtags", hashtagRoutes);

// Default route to verify the server is running
app.get("/", (req, res) => res.send("Hello World!"));

// Start the server and listen for requests
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

// Import store if necessary (ensure it's properly setup)
require("./store");
