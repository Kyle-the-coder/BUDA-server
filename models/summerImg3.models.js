const mongoose = require('mongoose');

const SummerImg3Schema = new mongoose.Schema({
    summerImg3:{
        type: String
    }
})

const SummerImg3 = mongoose.model("SummerImg3", SummerImg3Schema)
module.exports = SummerImg3;