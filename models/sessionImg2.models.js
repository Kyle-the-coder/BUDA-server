const mongoose = require('mongoose');

const SessionImg2Schema = new mongoose.Schema({
    sessionImg2:{
        type: String
    }
})

const SessionImg2 = mongoose.model("SessionImg2", SessionImg2Schema)
module.exports = SessionImg2;