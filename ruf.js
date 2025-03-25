// const axios = require('axios');
// const Trend = require("../models/Trend");
// const { getAllWoeids } = require("../services/woeidService");

// if (!BEARER_TOKEN) throw new Error("BEARER_TOKEN is required in environment variables");
// // 1. Fetch & Store Hashtags for All 63 Countries
// const fetchAndStoreAllTrends = async (req, res) => {
//     try {
//         const woeidList = getAllWoeids();
//        console.log("woeidList", woeidList);
//         const requests = woeidList.map(location =>
//             axios.get(`https://api.twitter.com/2/trends/by/woeid/${location.woeid}?max_trends=50`, {
//                 headers: { Authorization: `Bearer ${BEARER_TOKEN}` }
//             }).then(response => ({
//                 location: location.name,
//                 trends: response.data.data
//                     .filter(trend => trend.trend_name && trend.tweet_count !== undefined)
//                     .map(trend => ({
//                         location: location.name,
//                         trend_name: trend.trend_name,
//                         tweet_count: trend.tweet_count,
//                         timestamp: new Date() // Store the fetch time
//                     }))
//             })).catch(error => {
//                 console.warn(`Failed to fetch ${location.name}: ${error.message}`);
//                 return { location: location.name, trends: [] };
//             })
//         );
//         const results = await Promise.all(requests);
//         const allTrends = results.flatMap(result => result.trends);
//         if (allTrends.length > 0) {
//             //await Trend.deleteMany({}); // Clear old trends (optional)
//             await Trend.insertMany(allTrends);
//         }
//         return res.json({
//             message: `${allTrends.length} trends saved successfully`,
//             data: allTrends,
//         });
//     } catch (error) {
//         console.error('Error fetching trends:', error.message);
//         return res.status(500).json({ message: 'Failed to fetch trends', error: error.message });
//     }
// };
// // 2. Check if Hashtag Exists in DB
// const checkHashtag = async (req, res) => {
//     const { hashtag } = req.params;
//     if (!hashtag) return res.status(400).json({ message: 'Hashtag is required' });
//     try {
//         const trend = await Trend.findOne({ trend_name: hashtag });
//         if (trend) {
//             return res.json({
//                 message: 'Hashtag found',
//                 data: trend,
//             });
//         } else {
//             return res.status(404).json({ message: 'Hashtag not found' });
//         }
//     } catch (error) {
//         console.error('Error checking hashtag:', error.message);
//         return res.status(500).json({ message: 'Failed to check hashtag', error: error.message });
//     }
// };
// module.exports = { fetchAndStoreAllTrends, checkHashtag };





// // 2:47
// // then create the services folder and then    store this    
//  const woeidList = [
//     { name: "Algeria", woeid: 23424740 },
//     { name: "Argentina", woeid: 23424747 },
//     { name: "Australia", woeid: 23424748 },
//     { name: "Austria", woeid: 23424750 },
//     { name: "Bahrain", woeid: 23424753 },
//     { name: "Belarus", woeid: 23424765 },
//     { name: "Belgium", woeid: 23424757 },
//     { name: "Brazil", woeid: 23424768 },
//     { name: "Canada", woeid: 23424775 },
//     { name: "Chile", woeid: 23424782 },
//     { name: "Colombia", woeid: 23424787 },
//     { name: "Denmark", woeid: 23424796 },
//     { name: "Dominican Republic", woeid: 23424800 },
//     { name: "Ecuador", woeid: 23424801 },
//     { name: "Egypt", woeid: 23424802 },
//     { name: "France", woeid: 23424819 },
//     { name: "Germany", woeid: 23424829 },
//     { name: "Ghana", woeid: 23424824 },
//     { name: "Greece", woeid: 23424833 },
//     { name: "Guatemala", woeid: 23424834 },
//     { name: "India", woeid: 23424848 },
//     { name: "Indonesia", woeid: 23424846 },
//     { name: "Ireland", woeid: 23424803 },
//     { name: "Israel", woeid: 23424852 },
//     { name: "Italy", woeid: 23424853 },
//     { name: "Japan", woeid: 23424856 },
//     { name: "Jordan", woeid: 23424860 },
//     { name: "Kenya", woeid: 23424863 },
//     { name: "Kuwait", woeid: 23424870 },
//     { name: "Latvia", woeid: 23424874 },
//     { name: "Lebanon", woeid: 23424873 },
//     { name: "Malaysia", woeid: 23424901 },
//     { name: "Mexico", woeid: 23424900 },
//     { name: "Netherlands", woeid: 23424909 },
//     { name: "New Zealand", woeid: 23424916 },
//     { name: "Nigeria", woeid: 23424908 },
//     { name: "Norway", woeid: 23424910 },
//     { name: "Oman", woeid: 23424898 },
//     { name: "Pakistan", woeid: 23424922 },
//     { name: "Panama", woeid: 23424924 },
//     { name: "Peru", woeid: 23424919 },
//     { name: "Philippines", woeid: 23424934 },
//     { name: "Poland", woeid: 23424923 },
//     { name: "Portugal", woeid: 23424925 },
//     { name: "Puerto Rico", woeid: 23424935 },
//     { name: "Qatar", woeid: 23424930 },
//     { name: "Russia", woeid: 23424936 },
//     { name: "Saudi Arabia", woeid: 23424938 },
//     { name: "Singapore", woeid: 23424948 },
//     { name: "South Africa", woeid: 23424942 },
//     { name: "South Korea", woeid: 23424868 },
//     { name: "Spain", woeid: 23424950 },
//     { name: "Sweden", woeid: 23424954 },
//     { name: "Switzerland", woeid: 23424957 },
//     { name: "Thailand", woeid: 23424960 },
//     { name: "Turkey", woeid: 23424969 },
//     { name: "Ukraine", woeid: 23424976 },
//     { name: "United Arab Emirates", woeid: 23424738 },
//     { name: "United Kingdom", woeid: 23424975 },
//     { name: "United States", woeid: 23424977 },
//     { name: "Venezuela", woeid: 23424982 },
//     { name: "Vietnam", woeid: 23424984 },
//     { name: "Worldwide", woeid: 1 }
//   ];
//   const getWoeidByName = (name) => {
//     return woeidList.find(location => location.name.toLowerCase() === name.toLowerCase());
//   };
//   const getAllWoeids = () => woeidList;
//   module.exports = {
//     getWoeidByName,
//     getAllWoeids,
//   };



// single  ----------------------------
const axios = require('axios');
// TREND MODEL
const Trend = require("../models/Trend")
// fetch trends  => /api/v1/trendsHashtah
const trendsHashtag = async (req, res) => {
    const { woeid } = req.params;
    console.log("woeid", woeid);
    if (!woeid) {
        return res.status(400).json({ message: "woeid is required" });
    }
    const BEARER_TOKEN = process.env.BEARER_TOKEN
    console.log("BEARER_TOKEN", BEARER_TOKEN);
    const options = {
        method: 'GET',
        url: `https://api.twitter.com/2/trends/by/woeid/${woeid}?max_trends=50`,
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`
        }
    };
    try {
        const response = await axios.request(options);
        if (response.data && Array.isArray(response.data.data)) {
            const trends = response.data.data
                .filter(trend => trend.trend_name && trend.tweet_count !== undefined)
                .map(trend => ({
                    trend_name: trend.trend_name,
                    tweet_count: trend.tweet_count,
                }));
            await Trend.insertMany(trends)
            const count = await Trend.countDocuments();
            console.log("Total trends in DB:", count);
            return res.json({
                message: " trend saved successfully",
                data: trends,
                trendsCounts: Trend.countDocuments
            });
        } else {
            return res.status(500).json({ message: 'Unexpected response structure', data: response.data });
        }
    } catch (error) {
        console.error('Error fetching trends:', error.message);
        return res.status(500).json({ message: 'Failed to fetch trends', error: error.message });
    }
}
module.exports = trendsHashtag