const mongoose = require('mongoose');

const BudaAdminSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        minlength: [3, "User Name needs to be more than 3 characters"]
    },
    password:{
        type: String,
        required: true,
        minlength: [3, "Password needs to be more than 3 characters"]
    },
    
})

const BudaAdmin = mongoose.model("BudaAdmin", BudaAdminSchema)
module.exports = BudaAdmin;