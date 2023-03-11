const mongoose = require('mongoose');

const SessionImg3Schema = new mongoose.Schema({
    sessionImg3:{
        type: String
    }
})

const SessionImg3 = mongoose.model("SessionImg3", SessionImg3Schema)
module.exports = SessionImg3;