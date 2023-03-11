const mongoose = require('mongoose');

const CrewBannerVidSchema = new mongoose.Schema({
    crewBannerVid:{
        type: String
    }
})

const CrewBannerVid = mongoose.model("CrewBannerVid", CrewBannerVidSchema)
module.exports = CrewBannerVid;