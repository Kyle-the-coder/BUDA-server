const mongoose = require('mongoose');

const LandingPageVid1Schema = new mongoose.Schema({
    landingPageVid1:{
        type: String
    }
})

const LandingPageVid1 = mongoose.model("LandingPageVid1", LandingPageVid1Schema)
module.exports = LandingPageVid1;