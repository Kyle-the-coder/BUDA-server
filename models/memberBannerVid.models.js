const mongoose = require('mongoose');

const MemberBannerVidSchema = new mongoose.Schema({
    memberBannerVid:{
        type: String
    }
})

const MemberBannerVid = mongoose.model("MemberBannerVid", MemberBannerVidSchema)
module.exports = MemberBannerVid;