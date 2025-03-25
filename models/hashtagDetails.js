const mongoose = require("mongoose")
const HashTagDetailSchema = mongoose.Schema({
    hashtagName:{
        type:String,
        required:true
    },
    hashtagCount:{
        type:Number,
        required:true
    }
})

const HashTagDetails = mongoose.model("hashtagdetails",HashTagDetailSchema)
module.exports = HashTagDetails;