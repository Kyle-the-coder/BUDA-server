const mongoose = require('mongoose');

const BudaCrewAdminSchema = new mongoose.Schema({
    password:{
        type: String,
        required: true,
        minlength: [3, "User Name needs to be more than 3 characters"]
    }
})

const BudaCrewAdmin = mongoose.model("BudaCrewAdmin", BudaCrewAdminSchema)
module.exports = BudaCrewAdmin;