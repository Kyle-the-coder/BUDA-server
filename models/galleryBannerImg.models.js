const mongoose = require('mongoose');

const GalleryBannerImgSchema = new mongoose.Schema({
    galleryBannerImg:{
        type: String
    }
})

const GalleryBannerImg = mongoose.model("GalleryBannerImg", GalleryBannerImgSchema)
module.exports = GalleryBannerImg;