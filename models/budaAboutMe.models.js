const mongoose = require('mongoose');

const BudaAboutMeSchema = new mongoose.Schema({
    aboutMe:{
        type: String,
        minlength: [3, "About me needs to be more than 3 characters"]
    }
})

const BudaAboutMe = mongoose.model("BudaAboutMe", BudaAboutMeSchema)
module.exports = BudaAboutMe;