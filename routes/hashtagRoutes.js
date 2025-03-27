const express = require("express")
const {getcountryHashtag, getHashtagData} = require("../controllers/hashtagcontrollers")
const router = express.Router()

//Search
// router.get("/")

//All HashTag on country
router.get("/country" , getcountryHashtag);
router.get("/hastagname" , getHashtagData);


module.exports = router