const HashTagDetails = require("../models/hashtagDetails");

const getcountryHashtag = async (req, res) => {
  try {
    const { location } = req.body;
    const data = await HashTagDetails.find({ location });
    console.log(data, "data");
    return res.status(200).json({
      message: "Data",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "severe error",
    });
  }
};

module.exports = getcountryHashtag;
