const mongoose = require('mongoose');

const BudaAboutBudaSchema = new mongoose.Schema({
    aboutBuda:{
        type: String,
        minlength: [3, "About me needs to be more than 3 characters"]
    }
})

const BudaAboutBuda = mongoose.model("BudaAboutBuda", BudaAboutBudaSchema)
module.exports = BudaAboutBuda;