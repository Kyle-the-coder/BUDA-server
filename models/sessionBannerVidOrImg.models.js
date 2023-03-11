const mongoose = require('mongoose');

const SessionBannerVidOrImgSchema = new mongoose.Schema({
    sessionBannerVidOrImg:{
        type: String
    }
})

const SessionBannerVidOrImg = mongoose.model("SessionBannerVidOrImg", SessionBannerVidOrImgSchema)
module.exports = SessionBannerVidOrImg;