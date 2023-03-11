const mongoose = require('mongoose');

const SessionBannerVidSchema = new mongoose.Schema({
    sessionBannerVid:{
        type: String
    }
})

const SessionBannerVid = mongoose.model("SessionBannerVid", SessionBannerVidSchema)
module.exports = SessionBannerVid;