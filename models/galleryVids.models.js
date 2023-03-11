const mongoose = require('mongoose');

const GalleryVidsSchema = new mongoose.Schema({
    galleryVids:{
        type: String
    }
})

const GalleryVids = mongoose.model("GalleryVids", GalleryVidsSchema)
module.exports = GalleryVids;