const mongoose = require('mongoose');

const BudaCrewInfoSchema = new mongoose.Schema({
    session1Date: {
        type: String,
        minlength: [3, "Session info needs to be more than 3 characters"]
    },
    session1Tuition: {
        type: String,
        minlength: [3, "Session info needs to be more than 3 characters"]
    },
    session1Includes: {
        type: String,
        minlength: [3, "Session info needs to be more than 3 characters"]
    },
    session2Date: {
        type: String,
        minlength: [3, "Session info needs to be more than 3 characters"]
    },
    session2Tuition: {
        type: String,
        minlength: [3, "Session info needs to be more than 3 characters"]
    },
    session2Includes: {
        type: String,
        minlength: [3, "Session info needs to be more than 3 characters"]
    },
    classTime1: {
        type: String,
        minlength: [3, "Class time needs to be more than 3 characters"]
    },
    classTime2: {
        type: String,
        minlength: [3, "Class time needs to be more than 3 characters"]
    },
    requirementInfo: {
        type: String,
        minlength: [3, "Buda requirement needs to be more than 3 characters"]
    },
    extraPerformanceInfo: {
        type: String
    },
    mandatoryClassDates: {
        type: String
    },
    extraRehearsalClassDates: {
        type: String
    },
    auditionDate: {
        type: String
    },
    compDateInfo: {
        type: String
    }
})

const BudaCrewInfo = mongoose.model("BudaCrewInfo", BudaCrewInfoSchema)
module.exports = BudaCrewInfo;