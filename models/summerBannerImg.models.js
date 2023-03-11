const mongoose = require('mongoose');

const SummerBannerSchema = new mongoose.Schema({
    summerBannerImg:{
        type: String
    }
})

const SummerBanner = mongoose.model("SummerBanner", SummerBannerSchema)
module.exports = SummerBanner;