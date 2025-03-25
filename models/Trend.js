const mongoose = require('mongoose');

const trendSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  trend_name: {
    type: String,
    required: true,
  },
  tweet_count: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  }
});

// Create the model from the schema
const Trend = mongoose.model('Trend', trendSchema);

module.exports = Trend;
