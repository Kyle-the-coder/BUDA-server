const mongoose = require('mongoose');

const LandingPageCard3Schema = new mongoose.Schema({
    landingPageCard3:{
        type: String
    }
})

const LandingPageCard3 = mongoose.model("LandingPageCard3", LandingPageCard3Schema)
module.exports = LandingPageCard3;