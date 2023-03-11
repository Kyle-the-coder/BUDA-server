const mongoose = require('mongoose');

const BudaRatesInfoSchema = new mongoose.Schema({
    includes:{
        type: String,
        minlength: [3, "Includes needs to be more than 3 characters"]
    }
})

const BudaRatesInfo = mongoose.model("BudaRatesInfo", BudaRatesInfoSchema)
module.exports = BudaRatesInfo;