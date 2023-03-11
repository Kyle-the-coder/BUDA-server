const mongoose = require('mongoose');

const SummerBannerVidOrImgSchema = new mongoose.Schema({
    summerBannerVidOrImg:{
        type: String
    }
})

const SummerBannerVidOrImg = mongoose.model("SummerBannerVidOrImg", SummerBannerVidOrImgSchema)
module.exports = SummerBannerVidOrImg;

