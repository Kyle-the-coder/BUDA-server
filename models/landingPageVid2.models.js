const mongoose = require('mongoose');

const LandingPageVid2Schema = new mongoose.Schema({
    landingPageVid2:{
        type: String
    }
})

const LandingPageVid2 = mongoose.model("LandingPageVid2", LandingPageVid2Schema)
module.exports = LandingPageVid2;