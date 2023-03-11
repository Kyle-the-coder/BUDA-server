const mongoose = require('mongoose');

const SessionMainImgSchema = new mongoose.Schema({
    sessionMainImg:{
        type: String
    }
})

const SessionMainImg = mongoose.model("SessionMainImg", SessionMainImgSchema)
module.exports = SessionMainImg;