const mongoose = require('mongoose');

const RatesBannerVidOrImgSchema = new mongoose.Schema({
    ratesBannerVidOrImg:{
        type: String
    }
})

const RatesBannerVidOrImg = mongoose.model("BannerVidOrImg", RatesBannerVidOrImgSchema)
module.exports = RatesBannerVidOrImg