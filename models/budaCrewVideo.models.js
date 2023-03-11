const mongoose = require('mongoose');

const BudaCrewVideoSchema = new mongoose.Schema({
    videoTitle: {
        type: String,
        minlength: [3, "Session info needs to be more than 3 characters"]
    },
    videoLink: {
        type: String,
        minlength: [3, "Session info needs to be more than 3 characters"]
    }
    
})

const BudaCrewVideo = mongoose.model("BudaCrewVideo", BudaCrewVideoSchema)
module.exports = BudaCrewVideo;