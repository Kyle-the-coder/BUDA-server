const { collection } = require('../models/budaCrewAdmin.models')
const BudaCrewAdmin = require('../models/budaCrewAdmin.models')


module.exports.index = (req, res) => {
    res.json({ message: "hey from the controller" })
}

//Find All
module.exports.findAllBudaAdmin = (req, res) => {
    BudaCrewAdmin.find()
        .then(results => { res.json(results) })
        .catch(err => res.status(400).json({ message: "not working", err }))
}

//Create
module.exports.createBudaAdmin = (req, res) => {
    BudaCrewAdmin.create(req.body)
        .then(createdBudda => res.json(createdBudda))
        .catch(err => res.status(400).json({ message: "not working", err }))
}


//Find One
module.exports.findOneBudaAdmin = (req, res) => {
    BudaCrewAdmin.findOne({ _id: req.params.id })
        .then(oneBuda => res.json(oneBuda))
        .catch(err => res.status(400).json({ message: "that didn't work", err }))
}



//Update
module.exports.updateBuddaAdmin = (req, res) => {
    BudaCrewAdmin.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then(updatedBuda => res.json(updatedBuda))
        .catch(err => res.status(400).json({ message: "that didn't work", err }))
}



//Delete
module.exports.deleteBuddaAdmin = (req, res) => {
    BudaCrewAdmin.deleteOne({_id: req.params.id})
        .then(deletedBuda => res.json(deletedBuda))
        .catch(err=>res.status(400).json({message: "that didn't work", err}))
}


//Admin
module.exports.setBudaCrewAdmin = async(req, res) => {
    const {userName, password} = req.body;

    try{
        const check = await collection.findOne({userName, password})
        if(check){
            res.json("enter")
        } else{
            res.json("does not enter")
        }
    } catch(e){
        res.json("never enter again")
    }
}