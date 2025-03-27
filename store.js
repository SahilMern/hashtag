const axios = require("axios");
const mongoose = require("mongoose");
const LocationTrend = require("./models/LocationTrend");

const woeidList = [
  { name: "Algeria", woeid: 23424740 },
  { name: "Argentina", woeid: 23424747 },
  { name: "Australia", woeid: 23424748 },
  { name: "Austria", woeid: 23424750 },
];

// Your Twitter API Bearer Token
const BEARER_TOKEN ="";

// MongoDB Connection (ensure you have a MongoDB instance running)
// mongoose.connect("mongodb://localhost:27017/twitter-trends", {});
require("./database/connection")

// Function to get the trends and store in the database
async function getAndStoreTrends(location) {
  try {
    const response = await axios.get(
      `https://api.twitter.com/2/trends/by/woeid/${location.woeid}?max_trends=50`,
      {
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
      }
    );

    console.log(response.data.data);
    // process.exit()

    // Delete existing data for the location
    const deleteData = await LocationTrend.deleteMany({
      location: location.name,
    });

    console.log(deleteData, "deleteddata");

    // Iterate over the trends and store them in the database
    const trends = response.data.data; // assuming 'trends' is the key in the response
    console.log(trends, "trends");
    
    const timestamp = new Date().toISOString();

    console.log(location.name, "location.name");
    
    const trendData = trends.map((trend) => ({
      location: location.name,
      trend_name: trend.trend_name,
      tweet_count: trend.tweet_volume || 0, // tweet_volume might be null
      timestamp: timestamp,
    }));

    // Insert new data
    await LocationTrend.insertMany(trendData);

    console.log(`Data for ${location.name} stored successfully.`);
    // process.exit();

  } catch (error) {
    console.error(
      `Error fetching or storing trends for ${location.name}:`,
      error
    );
  }
}

// Function to loop over the locations and call the API
async function startFetchingTrends() {
  let i = 0;
  const locationsCount = woeidList.length;
  console.log(locationsCount, "location Count");

  setInterval(async () => {
    const location = woeidList[i];
    console.log(`Fetching trends for ${location.name}...`);

    // Fetch and store the trends for the current location
    await getAndStoreTrends(location);
    // process.exit();
    // Move to the next location
    i = (i + 1) % locationsCount; // This ensures it loops back to the start once the end is reached
  }, 60000); // 15 minutes interval (in milliseconds)
}

// Start the trend fetching process
startFetchingTrends();
