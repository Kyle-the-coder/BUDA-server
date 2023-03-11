const mongoose = require('mongoose');

const BudaRatesBannerVideoSchema = new mongoose.Schema({
    budaRatesBannerVideo:{
        type: String
    }
})

const BudaRatesBannerVideo = mongoose.model("BudaRatesBannerVideo", BudaRatesBannerVideoSchema)
module.exports = BudaRatesBannerVideo;