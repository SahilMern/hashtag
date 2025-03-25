const express = require("express")
const getcountryHashtag = require("../controllers/hashtagcontrollers")
const router = express.Router()

//Search
// router.get("/")

//All HashTag on country
router.get("/country" , getcountryHashtag)

module.exports = router