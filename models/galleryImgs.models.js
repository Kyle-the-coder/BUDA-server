const mongoose = require('mongoose');

const GalleryImgsSchema = new mongoose.Schema({
    galleryImgs:{
        type: String
    }
})

const GalleryImgs = mongoose.model("GalleryImgs", GalleryImgsSchema)
module.exports = GalleryImgs;