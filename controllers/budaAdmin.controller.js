const { collection } = require('../models/budaAdmin.models')
const BudaAdmin = require('../models/budaAdmin.models')


module.exports.index = (req, res) => {
    res.json({ message: "hey from the controller" })
}

//Find All
module.exports.findAllBudaAdmin = (req, res) => {
    BudaAdmin.find()
        .then(results => { res.json(results) })
        .catch(err => res.status(400).json({ message: "not working", err }))
}

//Create
module.exports.createBudaAdmin = (req, res) => {
    BudaAdmin.create(req.body)
        .then(createdBudda => res.json(createdBudda))
        .catch(err => res.status(400).json({ message: "not working", err }))
}


//Find One
module.exports.findOneBudaAdmin = (req, res) => {
    BudaAdmin.findOne({ _id: req.params.id })
        .then(oneBuda => res.json(oneBuda))
        .catch(err => res.status(400).json({ message: "that didn't work", err }))
}



//Update
module.exports.updateBuddaAdmin = (req, res) => {
    BudaAdmin.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then(updatedBuda => res.json(updatedBuda))
        .catch(err => res.status(400).json({ message: "that didn't work", err }))
}



//Delete
module.exports.deleteBuddaAdmin = (req, res) => {
    BudaAdmin.deleteOne({_id: req.params.id})
        .then(deletedBuda => res.json(deletedBuda))
        .catch(err=>res.status(400).json({message: "that didn't work", err}))
}


//Admin
module.exports.setBudaAdmin = async(req, res) => {
    const {userName, password} = req.body;

    try{
        const check = await collection.findOne({userName, password})
        if(check){
            res.json("exist")
        } else{
            res.json("does not exist")
        }
    } catch(e){
        res.json("not exist again")
    }
}