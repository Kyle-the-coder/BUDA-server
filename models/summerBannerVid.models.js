const mongoose = require('mongoose');

const SummerBannerVidSchema = new mongoose.Schema({
    summerBannerVid:{
        type: String
    }
})

const SummerBannerVid = mongoose.model("SummerBannerVid", SummerBannerVidSchema)
module.exports = SummerBannerVid;