const mongoose = require('mongoose');

const SummerMainImgSchema = new mongoose.Schema({
    summerMainImg:{
        type: String
    }
})

const SummerMainImg = mongoose.model("SummerMainImg", SummerMainImgSchema)
module.exports = SummerMainImg;