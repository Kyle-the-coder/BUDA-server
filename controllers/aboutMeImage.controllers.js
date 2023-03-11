const AboutMeImage = require('../models/aboutMeImage.models')

module.exports.index = (req, res) => {
    res.json({ message: "hey from the controller" })
}

//Find All
module.exports.findAllBuda = (req, res) => {
    AboutMeImage.find()
        .then(results => { res.json(results) })
        .catch(err => res.status(400).json({ message: "not working", err }))
}

//Create
module.exports.createBuda = (req, res) => {
    AboutMeImage.create(req.body)
        .then(createdBudda => res.json(createdBudda))
        .catch(err => res.status(400).json({ message: "not working", err }))
}

//Find One
module.exports.findOneBuda = (req, res) => {
    AboutMeImage.findOne({ _id: req.params.id })
        .then(oneBuda => res.json(oneBuda))
        .catch(err => res.status(400).json({ message: "that didn't work", err }))
}



//Update
module.exports.updateBudda = (req, res) => {
    AboutMeImage.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then(updatedBuda => res.json(updatedBuda))
        .catch(err => res.status(400).json({ message: "that didn't work", err }))
}


//Delete
module.exports.deleteBudda = (req, res) => {
    AboutMeImage.deleteOne({_id: req.params.id})
        .then(deletedBuda => res.json(deletedBuda))
        .catch(err=>res.status(400).json({message: "that didn't work", err}))
}
