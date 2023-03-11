const mongoose = require('mongoose');

const BudaRatesBannerSchema = new mongoose.Schema({
    budaRatesBannerImage:{
        type: String
    }
})

const BudaRatesBanner = mongoose.model("BudaRatesBanner", BudaRatesBannerSchema)
module.exports = BudaRatesBanner;