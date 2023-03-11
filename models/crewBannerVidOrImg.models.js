const mongoose = require('mongoose');

const CrewBannerVidOrImgSchema = new mongoose.Schema({
    crewBannerVidOrImg:{
        type: String
    }
})

const CrewBannerVidOrImg = mongoose.model("CrewBannerOrImgVid", CrewBannerVidOrImgSchema)
module.exports = CrewBannerVidOrImg;