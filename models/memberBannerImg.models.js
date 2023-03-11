const mongoose = require('mongoose');

const MemberBannerImgSchema = new mongoose.Schema({
    memberBannerImg:{
        type: String
    }
})

const MemberBannerImg = mongoose.model("MemberBannerImg", MemberBannerImgSchema)
module.exports = MemberBannerImg;