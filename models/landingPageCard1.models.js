const mongoose = require('mongoose');

const LandingPageCard1Schema = new mongoose.Schema({
    landingPageCard1:{
        type: String
    }
})

const LandingPageCard1 = mongoose.model("LandingPageCard1", LandingPageCard1Schema)
module.exports = LandingPageCard1;