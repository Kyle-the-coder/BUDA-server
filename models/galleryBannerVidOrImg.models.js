const mongoose = require('mongoose');

const GalleryBannerVidOrImgSchema = new mongoose.Schema({
    galleryBannerVidOrImg:{
        type: String
    }
})

const GalleryBannerVidOrImg = mongoose.model("GalleryBannerVidOrImg", GalleryBannerVidOrImgSchema)
module.exports = GalleryBannerVidOrImg;