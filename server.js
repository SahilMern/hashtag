const express = require("express");
const app = express();
const port = 9080;

app.use(express.json());
require("./database/connection");

// Import Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/v1/users", userRoutes);

const hashtagRoutes = require("./routes/hashtagRoutes");
app.use("/api/v1/hashtags", hashtagRoutes);

// Import and initialize your API calling (trends fetching)
// require("./apiCalling");  // This will import and trigger trends fetching

// Default route to verify server is running
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
