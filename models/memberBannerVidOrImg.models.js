const mongoose = require('mongoose');

const MemberBannerVidOrImgSchema = new mongoose.Schema({
    memberBannerVidOrImg:{
        type: String
    }
})

const MemberBannerVidOrImg = mongoose.model("MemberBannerVidOrImg", MemberBannerVidOrImgSchema)
module.exports = MemberBannerVidOrImg;