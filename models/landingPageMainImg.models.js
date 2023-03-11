const mongoose = require('mongoose');

const LandingPageMainImgSchema = new mongoose.Schema({
    landingPageMainImg:{
        type: String
    }
})

const LandingPageMainImg = mongoose.model("LandingPageMainImg", LandingPageMainImgSchema)
module.exports = LandingPageMainImg;