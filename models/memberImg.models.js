const mongoose = require('mongoose');

const MemberImgSchema = new mongoose.Schema({
    memberImg:{
        type: String
    }
})

const SesMember = mongoose.model("MemberImg", MemberImgSchema)
module.exports = SesMember;