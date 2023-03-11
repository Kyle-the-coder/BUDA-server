const mongoose = require('mongoose');

const BudaSummerInfoSchema = new mongoose.Schema({
    summerTitle:{
        type: String,
        minlength: [3, "Summer title needs to be more than 3 characters"]
    },
    summerContent:{
        type: String,
        minlength: [3, "Summer content needs to be more than 3 characters"]
    },
    regLink:{
        type: String,
        minlength: [3, "Register link needs to be more than 3 characters"]
    },
    
})

const BudaSummerInfo = mongoose.model("BudaSummerInfo", BudaSummerInfoSchema)
module.exports = BudaSummerInfo;