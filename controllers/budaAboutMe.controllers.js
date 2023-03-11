const BudaAboutMe = require('../models/budaAboutMe.models')

module.exports.index = (req, res) => {
    res.json({ message: "hey from the controller" })
}

//Find All
module.exports.findAllBuda = (req, res) => {
    BudaAboutMe.find()
        .then(results => { res.json(results) })
        .catch(err => res.status(400).json({ message: "not working", err }))
}

//Create
module.exports.createBuda = (req, res) => {
    BudaAboutMe.create(req.body)
        .then(createdBudda => res.json(createdBudda))
        .catch(err => res.status(400).json({ message: "not working", err }))
}

//Find One
module.exports.findOneBuda = (req, res) => {
    BudaAboutMe.findOne({ _id: req.params.id })
        .then(oneBuda => res.json(oneBuda))
        .catch(err => res.status(400).json({ message: "that didn't work", err }))
}



//Update
module.exports.updateBudda = (req, res) => {
    BudaAboutMe.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then(updatedBuda => res.json(updatedBuda))
        .catch(err => res.status(400).json({ message: "that didn't work", err }))
}


//Delete
module.exports.deleteBudda = (req, res) => {
    BudaAboutMe.deleteOne({_id: req.params.id})
        .then(deletedBuda => res.json(deletedBuda))
        .catch(err=>res.status(400).json({message: "that didn't work", err}))
}

