const mongoose = require('mongoose');

const BudaCrewMemberInfoSchema = new mongoose.Schema({
    memberTitle: {
        type: String,
        minlength: [3, "Session info needs to be more than 3 characters"]
    },
    upcomingEventsInfo: {
        type: String
    },
    videoTitle: {
        type: String,
        minlength: [3, "Session info needs to be more than 3 characters"]
    },
    videoLink: {
        type: String,
        minlength: [3, "Session info needs to be more than 3 characters"]
    },
    homeworkInfo: {
        type: String
    },
    budaCrewInfo: {
        type: String
    },
    contactPhone:{
        type: String
    },
    musicTitle:{
        type: String
    },
    musicLink:{
        type: String
    },
    
})

const BudaCrewMemberInfo = mongoose.model("BudaCrewMemberInfo", BudaCrewMemberInfoSchema)
module.exports = BudaCrewMemberInfo;