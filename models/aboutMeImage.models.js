const mongoose = require('mongoose');

const AboutMeImageSchema = new mongoose.Schema({
    aboutMeImage:{
        type: String
    }
})

const AboutMeImage = mongoose.model("AboutMeImage", AboutMeImageSchema)
module.exports = AboutMeImage;