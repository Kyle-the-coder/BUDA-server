const mongoose = require('mongoose');

const AboutBudaImageSchema = new mongoose.Schema({
    aboutBudaImage:{
        type: String
    }
})

const AboutBudaImage = mongoose.model("AboutBudaImage", AboutBudaImageSchema)
module.exports = AboutBudaImage;