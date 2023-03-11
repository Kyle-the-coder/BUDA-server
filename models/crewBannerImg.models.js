const mongoose = require('mongoose');

const CrewBannerImgSchema = new mongoose.Schema({
    crewBannerImg:{
        type: String
    }
})

const CrewBannerImg = mongoose.model("CrewBannerImg", CrewBannerImgSchema)
module.exports = CrewBannerImg;