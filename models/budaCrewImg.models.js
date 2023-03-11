const mongoose = require('mongoose');

const BudaCrewImgSchema = new mongoose.Schema({
    budaCrewImg:{
        type: String
    }
})

const BudaCrewImg = mongoose.model("BudaCrewImg", BudaCrewImgSchema)
module.exports = BudaCrewImg;