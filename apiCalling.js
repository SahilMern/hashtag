// const axios = require('axios');
// const { getAllWoeids } = require('./services/countrynames');
// const Trend = require('./models/Trend');

// const BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAFbWzgEAAAAAE%2F9fmDqZq%2F3QgERP9dLKLbJUlGc%3DMF6ooDjT4Z8oji5FcK8gnXfdzH83jU5gceDB0zJeA5ZKp3EARi"  // Replace with your actual Twitter Bearer Token

// // Function to fetch and store trends from Twitter API
// const fetchAndStoreAllTrends = async () => {
//   try {
//     const woeidList = getAllWoeids(); // Get list of WOEIDs
//     console.log("WOEID List:", woeidList);

//     const allTrends = []; // Initialize an array to store all trends

//     // Loop through the WOEIDs and fetch trends for each location
//     for (const location of woeidList) {
//       try {
//         const response = await axios.get(`https://api.twitter.com/2/trends/by/woeid/${location.woeid}?max_trends=50`, {
//           headers: { Authorization: `Bearer ${BEARER_TOKEN}` }
//         });

//         const trends = response.data.data
//           .filter(trend => trend.trend_name && trend.tweet_count !== undefined)
//           .map(trend => ({
//             location: location.name,
//             trend_name: trend.trend_name,
//             tweet_count: trend.tweet_count,
//             timestamp: new Date()  // Store the fetch time
//           }));

//         // Directly save trends to DB without checking duplicates
//         await Trend.insertMany(trends);
//         console.log(`Trends for ${location.name} saved to DB.`);

//       } catch (error) {
//         console.warn(`Failed to fetch trends for ${location.name}: ${error.message}`);
//       }
//     }

//     // Log the total number of trends fetched and stored
//     console.log(`${allTrends.length} trends fetched and stored.`);

//   } catch (error) {
//     console.log(error, "error");
    
//     console.error('Error fetching trends:', error.message);
//   }
// };

// // Call the function to fetch trends
// fetchAndStoreAllTrends();

// // Set interval to fetch trends every 12 minutes (if needed)
// setInterval(fetchAndStoreAllTrends, 12 * 60 * 1000);
