const mongoose = require('mongoose');

const SessionBannerImgSchema = new mongoose.Schema({
    sessionBannerImg:{
        type: String
    }
})

const SessionBannerImg = mongoose.model("SessionBannerImg", SessionBannerImgSchema)
module.exports = SessionBannerImg;