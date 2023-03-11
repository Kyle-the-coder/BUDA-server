const mongoose = require('mongoose');

const BudaCrewMusicSchema = new mongoose.Schema({
    musicTitle:{
        type: String
    },
    musicLink:{
        type: String
    },
    
})

const BudaCrewMusicInfo = mongoose.model("BudaCrewMusicInfo", BudaCrewMusicSchema)
module.exports = BudaCrewMusicInfo;