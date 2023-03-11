const mongoose = require('mongoose');

const LandingPageCard2Schema = new mongoose.Schema({
    landingPageCard2:{
        type: String
    }
})

const LandingPageCard2 = mongoose.model("LandingPageCard2", LandingPageCard2Schema)
module.exports = LandingPageCard2;