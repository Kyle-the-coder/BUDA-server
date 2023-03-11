const mongoose = require('mongoose');

const BudaRatesSchema = new mongoose.Schema({
    rate1:{
        type: Number,
    },
    rate2:{
        type: Number,
        
    }
})

const BudaRates = mongoose.model("BudaRates", BudaRatesSchema)
module.exports = BudaRates;