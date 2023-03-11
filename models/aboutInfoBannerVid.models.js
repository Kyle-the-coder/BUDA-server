const mongoose = require('mongoose');

const AboutInfoBannerVidSchema = new mongoose.Schema({
    aboutInfoBannerVid:{
        type: String
    }
})

const AboutInfoBannerVid = mongoose.model("AboutInfoBannerVid", AboutInfoBannerVidSchema)
module.exports = AboutInfoBannerVid;