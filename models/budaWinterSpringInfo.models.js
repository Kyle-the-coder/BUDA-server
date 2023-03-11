const mongoose = require('mongoose');

const BudaSessionInfoSchema = new mongoose.Schema({
    sessionTitle:{
        type: String,
        minlength: [3, "Session title needs to be more than 3 characters"]
    },
    sessionIntro:{
        type: String,
        minlength: [3, "Session title needs to be more than 3 characters"]
    },
    sessionLink:{
        type: String,
        minlength: [3, "Session title needs to be more than 3 characters"]
    },
    startDate:{
        type: String,
        minlength: [3, "Session content needs to be more than 3 characters"]
    },
    showDate:{
        type: String,
        minlength: [3, "Session link needs to be more than 3 characters"]
    },
    showLocation:{
        type: String,
        minlength: [3, "Session link needs to be more than 3 characters"]
    },
    showTech:{
        type: String,
        minlength: [3, "Session link needs to be more than 3 characters"]
    },
    showTitle:{
        type: String,
        minlength: [3, "Session link needs to be more than 3 characters"]
    },
    showTime:{
        type: String,
        minlength: [3, "Session link needs to be more than 3 characters"]
    },
    noClass1:{
        type: String,
        minlength: [2, "Session link needs to be more than 3 characters"]
    },
    noClass2:{
        type: String,
        minlength: [2, "Session link needs to be more than 3 characters"]
    },
    noClass3:{
        type: String,
        minlength: [2, "Session link needs to be more than 3 characters"]
    },
    noClass4:{
        type: String,
        minlength: [2, "Session link needs to be more than 3 characters"]
    },
    noClass5:{
        type: String,
        minlength: [2, "Session link needs to be more than 3 characters"]
    },
    noClass6:{
        type: String,
        minlength: [2, "Session link needs to be more than 3 characters"]
    },
    noClass7:{
        type: String,
        minlength: [2, "Session link needs to be more than 3 characters"]
    },
    
})

const BudaSessionInfo = mongoose.model("BudaSessionInfo", BudaSessionInfoSchema)
module.exports = BudaSessionInfo;