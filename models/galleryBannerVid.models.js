const mongoose = require('mongoose');

const GalleryBannerVidSchema = new mongoose.Schema({
    galleryBannerVid:{
        type: String
    }
})

const GalleryBannerVid = mongoose.model("GalleryBannerVid", GalleryBannerVidSchema)
module.exports = GalleryBannerVid;