const mongoose = require('mongoose');

const AboutBannerVidOrImgSchema = new mongoose.Schema({
    aboutBannerVidOrImg:{
        type: String
    }
})

const AboutBannerVidOrImg = mongoose.model("AboutBannerVidOrImg", AboutBannerVidOrImgSchema)
module.exports = AboutBannerVidOrImg