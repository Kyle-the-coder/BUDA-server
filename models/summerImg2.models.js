const mongoose = require('mongoose');

const SummerImg2Schema = new mongoose.Schema({
    summerImg2:{
        type: String
    }
})

const SummerImg2 = mongoose.model("SummerImg2", SummerImg2Schema)
module.exports = SummerImg2;