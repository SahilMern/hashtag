const LocationTrend = require("../models/LocationTrend");

const getcountryHashtag = async (req, res) => {
  try {
    // Destructure location from the request body
    const { location } = req.body;
    if (!location) {
      return res.status(400).json({
        message: "Location is required",
      });
    }

    console.log(typeof location, "Location");

    // Query for the location and optionally filter by tweet_count if provided
    const data = await LocationTrend.find({
      location: {
        $regex: "Australia",
        $options: "i",
      },
    });

    console.log(data, "data");

    return res.status(200).json({
      message: "Data retrieved successfully",
      data,
    });
  } catch (error) {
    console.log(error);

    // Return the error message
    return res.status(500).json({
      message: "Severe error occurred",
      error: error.message,
    });
  }
};

const getHashtagData = async (req, res) => {
  try {
    const { hashtagname } = req.body;
    console.log(hashtagname, "hashtagname");

    // Check if hashtagname is provided and valid
    if (!hashtagname || hashtagname.trim().length === 0) {
      return res.status(400).json({
        message: "Hashtag name is required and cannot be empty.",
      });
    }

    // Query the database for data with the given hashtagname
    const findHashtagData = await LocationTrend.find({
      trend_name: hashtagname,
    });

    // If no data is found, return a message indicating that
    if (findHashtagData.length === 0) {
      // const randomGenrate = await ran
      return res.status(200).json({
        message: "No data found for this hashtag.",
        randomValue: 200,
      });
    }

    // If data is found, return the data
    return res.status(200).json({
      message: "Hashtag data retrieved successfully.",
      status: true,
      findHashtagData,
    });
  } catch (error) {
    console.log(error);

    // Handle any errors that might occur during the query
    return res.status(500).json({
      message: "An error occurred while fetching the data.",
      error: error.message,
    });
  }
};

module.exports = { getcountryHashtag, getHashtagData };
