const mongoose = require("mongoose");

// Define the schema
const locationTrendSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true, // location is required
  },
  trend_name: {
    type: String,
    required: true,  // trend_name is required
  },
  tweet_count: {
    type: Number,
    default: 0,  // Default value if tweet_count is missing
  },
  timestamp: {
    type: Date,
    default: Date.now,  // Default to current date and time when inserted
  },
});

// Create the model based on the schema
const LocationTrend = mongoose.model("LocationTrend", locationTrendSchema);

module.exports = LocationTrend;
