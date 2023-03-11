const mongoose = require('mongoose');

const AboutInfoBannerSchema = new mongoose.Schema({
    aboutInfoBannerImg:{
        type: String
    }
})

const AboutInfoBanner = mongoose.model("AboutInfoBanner", AboutInfoBannerSchema)
module.exports = AboutInfoBanner;