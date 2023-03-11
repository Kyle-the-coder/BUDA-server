const mongoose = require('mongoose');

const BudaDropInSchema = new mongoose.Schema({
    dropIn:{
        type: Number,
    }
})

const BudaDropIn = mongoose.model("BudaDropIn", BudaDropInSchema)
module.exports = BudaDropIn;