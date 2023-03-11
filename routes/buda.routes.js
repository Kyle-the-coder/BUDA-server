const BudaAboutMeController = require('../controllers/budaAboutMe.controllers')
const AboutMeImageController = require('../controllers/aboutMeImage.controllers')
const AboutBudaImageController = require('../controllers/aboutBudaImage.controllers')
const AboutInfoBannerImageController = require("../controllers/aboutInfoBannerImage.controllers")
const AboutInfoBannerVidController = require('../controllers/aboutInfoBannerVid.controllers')
const AboutBannerVidOrImgController = require('../controllers/aboutBannerVidOrImg.controller')
const BudaAdminController = require("../controllers/budaAdmin.controller")
const BudaCrewAdminController = require("../controllers/budaCrewAdmin.controllers")
const BudaCrewInfoController = require('../controllers/budaCrewInfo.controllers')
const BudaCrewMemberInfoController = require('../controllers/budaCrewMemberInfo.controllers')
const BudaAboutBudaController = require('../controllers/budaAboutBuda.controllers')
const BudaRatesController = require('../controllers/budaRates.controllers')
const BudaRatesInfoController = require('../controllers/budaRatesInfo.controllers')
const BudaRatesBannerImageController = require('../controllers/budaRatesBannerImage.controllers')
const BudaRatesBannerVideoController = require('../controllers/budaRatesBannerVideo.controllers')
const BudaDropInController = require('../controllers/budaDropIn.controllers')
const BudaSummerInfoController = require('../controllers/budaSummerInfo.controllers')
const BudaSessionInfoController = require('../controllers/budaWinterSpring.controllers')
const BudaCrewMusicController = require('../controllers/budaCrewMusic.controllers')
const BudaCrewVideoController = require('../controllers/budaCrewVideo.controllers')
const RatesBannerVidOrImgController = require('../controllers/ratesBannerVidOrImg.controllers')
const SummerBannerImgController = require('../controllers/summerBannerImg.controller')
const SummerBannerVidController = require('../controllers/summerBannerVid.controllers')
const SummerBannerVidOrImgController = require('../controllers/summerBannerVidOrImg.controllers')
const SessionBannerImgController = require('../controllers/sessionBannerImg.controllers')
const SessionBannerVidController = require('../controllers/sessionBannerVid.controllers')
const SessionBannerVidOrImgController = require('../controllers/sessionBannerVidOrImg.controllers')
const GalleryBannerImgController = require('../controllers/galleryBannerImg.controllers')
const GalleryBannerVidController = require('../controllers/galleryBannerVid.controllers')
const GalleryBannerVidOrImgController = require('../controllers/galleryBannerVidOrImg.controllers')
const CrewBannerImgController = require('../controllers/crewBannerImg.controller')
const CrewBannerVidController = require('../controllers/crewBannerVid.controller')
const CrewBannerVidOrImgController = require('../controllers/crewBannerVidOrImg.controller')
const MemberBannerImgController = require('../controllers/memberBannerImg.controller')
const MemberBannerVidController = require('../controllers/memberBannerVid.controller')
const MemberBannerVidOrImgController = require('../controllers/memberBannerVidOrImg.controller')
const LandingPageMainImgController = require('../controllers/landingPageMainImg.controller')
const LandingPageCard1Controller = require('../controllers/landingPageCard1.controller')
const LandingPageCard2Controller = require('../controllers/landingPageCard2.controller')
const LandingPageCard3Controller = require('../controllers/landingPageCard3.controller')
const LandingPageVid1Controller = require('../controllers/landingPageVid1.controller')
const LandingPageVid2Controller = require('../controllers/landingPageVid2.controller')
const SummerMainImgController = require('../controllers/summerMainImg.controller')
const SummerImg2Controller = require('../controllers/summerImg2.controller')
const SummerImg3Controller = require('../controllers/summerImg3.controller')
const SessionMainImgController = require('../controllers/sessionMainImg.controller')
const SessionImg2Controller = require('../controllers/sessionImg2.controller')
const SessionImg3Controller = require('../controllers/sessionImg3.controller')
const MemberImgController = require('../controllers/memberImg.controller')
const BudaCrewImgController = require('../controllers/budaCrewImg.controller')
const GalleryVidsController = require('../controllers/galleryVids.controller')
const GalleryImgsController = require('../controllers/galleryImgs.controller')

module.exports = function (app) {
    // BUDA INFO LIST

    //BUDA ABOUT ME LIST
    app.get('/api/budaaboutme', BudaAboutMeController.findAllBuda)
    app.post('/api/budaaboutme', BudaAboutMeController.createBuda)
    app.get('/api/budaaboutme/:id', BudaAboutMeController.findOneBuda)
    app.put('/api/budaaboutme/:id', BudaAboutMeController.updateBudda)
    app.delete('/api/budaaboutme/:id', BudaAboutMeController.deleteBudda)

    //BUDA ABOUT INFO BANNER IMAGE LIST
    app.get('/api/aboutinfobanner', AboutInfoBannerImageController.findAllBuda)
    app.post('/api/aboutinfobanner', AboutInfoBannerImageController.createBuda)
    app.get('/api/aboutinfobanner/:id', AboutInfoBannerImageController.findOneBuda)
    app.put('/api/aboutinfobanner/:id', AboutInfoBannerImageController.updateBudda)
    app.delete('/api/aboutinfobanner/:id', AboutInfoBannerImageController.deleteBudda)

    //BUDA ABOUT INFO BANNER VIDEO LIST
    app.get('/api/aboutinfobannervid', AboutInfoBannerVidController.findAllBuda)
    app.post('/api/aboutinfobannervid', AboutInfoBannerVidController.createBuda)
    app.get('/api/aboutinfobannervid/:id', AboutInfoBannerVidController.findOneBuda)
    app.put('/api/aboutinfobannervid/:id', AboutInfoBannerVidController.updateBudda)
    app.delete('/api/aboutinfobannervid/:id', AboutInfoBannerVidController.deleteBudda)

    //ABOUT BANNER VIDEO OR IMAGE TRACKER
    app.get('/api/aboutbannervidorimg', AboutBannerVidOrImgController.findAllBuda)
    app.post('/api/aboutbannervidorimg', AboutBannerVidOrImgController.createBuda)
    app.get('/api/aboutbannervidorimg/:id', AboutBannerVidOrImgController.findOneBuda)
    app.put('/api/aboutbannervidorimg/:id', AboutBannerVidOrImgController.updateBudda)
    app.delete('/api/aboutbannervidorimg/:id', AboutBannerVidOrImgController.deleteBudda)

    //BUDA ABOUT ME IMAGE LIST
    app.get('/api/aboutmeimage', AboutMeImageController.findAllBuda)
    app.post('/api/aboutmeimage', AboutMeImageController.createBuda)
    app.get('/api/aboutmeimage/:id', AboutMeImageController.findOneBuda)
    app.put('/api/aboutmeimage/:id', AboutMeImageController.updateBudda)
    app.delete('/api/aboutmeimage/:id', AboutMeImageController.deleteBudda)

    //BUDA ABOUT BUDA LIST
    app.get('/api/budaaboutbuda', BudaAboutBudaController.findAllBuda)
    app.post('/api/budaaboutbuda', BudaAboutBudaController.createBuda)
    app.get('/api/budaaboutbuda/:id', BudaAboutBudaController.findOneBuda)
    app.put('/api/budaaboutbuda/:id', BudaAboutBudaController.updateBudda)
    app.delete('/api/budaaboutbuda/:id', BudaAboutBudaController.deleteBudda)

    //BUDA ABOUT BUDA IMAGE LIST
    app.get('/api/aboutbudaimage', AboutBudaImageController.findAllBuda)
    app.post('/api/aboutbudaimage', AboutBudaImageController.createBuda)
    app.get('/api/aboutbudaimage/:id', AboutBudaImageController.findOneBuda)
    app.put('/api/aboutbudaimage/:id', AboutBudaImageController.updateBudda)
    app.delete('/api/aboutbudaimage/:id', AboutBudaImageController.deleteBudda)

    //BUDA RATES LIST
    app.get('/api/budarates', BudaRatesController.findAllBuda)
    app.post('/api/budarates', BudaRatesController.createBuda)
    app.get('/api/budarates/:id', BudaRatesController.findOneBuda)
    app.put('/api/budarates/:id', BudaRatesController.updateBudda)
    app.delete('/api/budarates/:id', BudaRatesController.deleteBudda)

    //BUDA RATES BANNER IMAGE LIST
    app.get('/api/budaratesbanner', BudaRatesBannerImageController.findAllBuda)
    app.post('/api/budaratesbanner', BudaRatesBannerImageController.createBuda)
    app.get('/api/budaratesbanner/:id', BudaRatesBannerImageController.findOneBuda)
    app.put('/api/budaratesbanner/:id', BudaRatesBannerImageController.updateBudda)
    app.delete('/api/budaratesbanner/:id', BudaRatesBannerImageController.deleteBudda)

    //BUDA RATES BANNER VIDEO LIST
    app.get('/api/budaratesbannervideo', BudaRatesBannerVideoController.findAllBuda)
    app.post('/api/budaratesbannervideo', BudaRatesBannerVideoController.createBuda)
    app.get('/api/budaratesbannervideo/:id', BudaRatesBannerVideoController.findOneBuda)
    app.put('/api/budaratesbannervideo/:id', BudaRatesBannerVideoController.updateBudda)
    app.delete('/api/budaratesbannervideo/:id', BudaRatesBannerVideoController.deleteBudda)

    //RATES BANNER VIDEO OR IMAGE TRACKER
    app.get('/api/ratesbannervidorimg', RatesBannerVidOrImgController.findAllBuda)
    app.post('/api/ratesbannervidorimg', RatesBannerVidOrImgController.createBuda)
    app.get('/api/ratesbannervidorimg/:id', RatesBannerVidOrImgController.findOneBuda)
    app.put('/api/ratesbannervidorimg/:id', RatesBannerVidOrImgController.updateBudda)
    app.delete('/api/ratesbannervidorimg/:id', RatesBannerVidOrImgController.deleteBudda)

    //BUDA RATES INFO LIST
    app.get('/api/budaratesinfo', BudaRatesInfoController.findAllBuda)
    app.post('/api/budaratesinfo', BudaRatesInfoController.createBuda)
    app.get('/api/budaratesinfo/:id', BudaRatesInfoController.findOneBuda)
    app.put('/api/budaratesinfo/:id', BudaRatesInfoController.updateBudda)
    app.delete('/api/budaratesinfo/:id', BudaRatesInfoController.deleteBudda)

    //BUDA DROP IN INFO LIST
    app.get('/api/budadropin', BudaDropInController.findAllBuda)
    app.post('/api/budadropin', BudaDropInController.createBuda)
    app.get('/api/budadropin/:id', BudaDropInController.findOneBuda)
    app.put('/api/budadropin/:id', BudaDropInController.updateBudda)
    app.delete('/api/budadropin/:id', BudaDropInController.deleteBudda)

    //BUDA SUMMER INFO LIST
    app.get('/api/budasummerinfo', BudaSummerInfoController.findAllBuda)
    app.post('/api/budasummerinfo', BudaSummerInfoController.createBuda)
    app.get('/api/budasummerinfo/:id', BudaSummerInfoController.findOneBuda)
    app.put('/api/budasummerinfo/:id', BudaSummerInfoController.updateBudda)
    app.delete('/api/budasummerinfo/:id', BudaSummerInfoController.deleteBudda)

    //SUMMER BANNER IMAGE LIST
    app.get('/api/summerbannerimg', SummerBannerImgController.findAllBuda)
    app.post('/api/summerbannerimg', SummerBannerImgController.createBuda)
    app.get('/api/summerbannerimg/:id', SummerBannerImgController.findOneBuda)
    app.put('/api/summerbannerimg/:id', SummerBannerImgController.updateBudda)
    app.delete('/api/summerbannerimg/:id', SummerBannerImgController.deleteBudda)
    //SUMMER BANNER VIDEO LIST
    app.get('/api/summerbannervid', SummerBannerVidController.findAllBuda)
    app.post('/api/summerbannervid', SummerBannerVidController.createBuda)
    app.get('/api/summerbannervid/:id', SummerBannerVidController.findOneBuda)
    app.put('/api/summerbannervid/:id', SummerBannerVidController.updateBudda)
    app.delete('/api/summerbannervid/:id', SummerBannerVidController.deleteBudda)
    //SUMMER BANNER VIDEO OR IMAGE TRACKER
    app.get('/api/summerbannervidorimg', SummerBannerVidOrImgController.findAllBuda)
    app.post('/api/summerbannervidorimg', SummerBannerVidOrImgController.createBuda)
    app.get('/api/summerbannervidorimg/:id', SummerBannerVidOrImgController.findOneBuda)
    app.put('/api/summerbannervidorimg/:id', SummerBannerVidOrImgController.updateBudda)
    app.delete('/api/summerbannervidorimg/:id', SummerBannerVidOrImgController.deleteBudda)

    //SUMMER MAIN IMAGE LIST
    app.get('/api/summermainimg', SummerMainImgController.findAllBuda)
    app.post('/api/summermainimg', SummerMainImgController.createBuda)
    app.get('/api/summermainimg/:id', SummerMainImgController.findOneBuda)
    app.put('/api/summermainimg/:id', SummerMainImgController.updateBudda)
    app.delete('/api/summermainimg/:id', SummerMainImgController.deleteBudda)
    //SUMMER IMAGE 2 LIST
    app.get('/api/summerimg2', SummerImg2Controller.findAllBuda)
    app.post('/api/summerimg2', SummerImg2Controller.createBuda)
    app.get('/api/summerimg2/:id', SummerImg2Controller.findOneBuda)
    app.put('/api/summerimg2/:id', SummerImg2Controller.updateBudda)
    app.delete('/api/summerimg2/:id', SummerImg2Controller.deleteBudda)
    //SUMMER IMAGE 3 LIST
    app.get('/api/summerimg3', SummerImg3Controller.findAllBuda)
    app.post('/api/summerimg3', SummerImg3Controller.createBuda)
    app.get('/api/summerimg3/:id', SummerImg3Controller.findOneBuda)
    app.put('/api/summerimg3/:id', SummerImg3Controller.updateBudda)
    app.delete('/api/summerimg3/:id', SummerImg3Controller.deleteBudda)

    //BUDA SESSION INFO LIST
    app.get('/api/budasessioninfo', BudaSessionInfoController.findAllBuda)
    app.post('/api/budasessioninfo', BudaSessionInfoController.createBuda)
    app.get('/api/budasessioninfo/:id', BudaSessionInfoController.findOneBuda)
    app.put('/api/budasessioninfo/:id', BudaSessionInfoController.updateBudda)
    app.delete('/api/budasessioninfo/:id', BudaSessionInfoController.deleteBudda)

    //SESSION BANNER IMAGE LIST
    app.get('/api/sessionbannerimg', SessionBannerImgController.findAllBuda)
    app.post('/api/sessionbannerimg', SessionBannerImgController.createBuda)
    app.get('/api/sessionbannerimg/:id', SessionBannerImgController.findOneBuda)
    app.put('/api/sessionbannerimg/:id', SessionBannerImgController.updateBudda)
    app.delete('/api/sessionbannerimg/:id', SessionBannerImgController.deleteBudda)
    //SESSION BANNER VIDEO LIST
    app.get('/api/sessionbannervid', SessionBannerVidController.findAllBuda)
    app.post('/api/sessionbannervid', SessionBannerVidController.createBuda)
    app.get('/api/sessionbannervid/:id', SessionBannerVidController.findOneBuda)
    app.put('/api/sessionbannervid/:id', SessionBannerVidController.updateBudda)
    app.delete('/api/sessionbannervid/:id', SessionBannerVidController.deleteBudda)
    //SESSION BANNER VIDEO OR IMAGE TRACKER LIST
    app.get('/api/sessionbannervidorimg', SessionBannerVidOrImgController.findAllBuda)
    app.post('/api/sessionbannervidorimg', SessionBannerVidOrImgController.createBuda)
    app.get('/api/sessionbannervidorimg/:id', SessionBannerVidOrImgController.findOneBuda)
    app.put('/api/sessionbannervidorimg/:id', SessionBannerVidOrImgController.updateBudda)
    app.delete('/api/sessionbannervidorimg/:id', SessionBannerVidOrImgController.deleteBudda)

    //SESSION MAIN IMAGE LIST
    app.get('/api/sessionmainimg', SessionMainImgController.findAllBuda)
    app.post('/api/sessionmainimg', SessionMainImgController.createBuda)
    app.get('/api/sessionmainimg/:id', SessionMainImgController.findOneBuda)
    app.put('/api/sessionmainimg/:id', SessionMainImgController.updateBudda)
    app.delete('/api/sessionmainimg/:id', SessionMainImgController.deleteBudda)
    //SESSION IMAGE 2 LIST
    app.get('/api/sessionimg2', SessionImg2Controller.findAllBuda)
    app.post('/api/sessionimg2', SessionImg2Controller.createBuda)
    app.get('/api/sessionimg2/:id', SessionImg2Controller.findOneBuda)
    app.put('/api/sessionimg2/:id', SessionImg2Controller.updateBudda)
    app.delete('/api/sessionimg2/:id', SessionImg2Controller.deleteBudda)
    //SESSION IMAGE 3 LIST
    app.get('/api/sessionimg3', SessionImg3Controller.findAllBuda)
    app.post('/api/sessionimg3', SessionImg3Controller.createBuda)
    app.get('/api/sessionimg3/:id', SessionImg3Controller.findOneBuda)
    app.put('/api/sessionimg3/:id', SessionImg3Controller.updateBudda)
    app.delete('/api/sessionimg3/:id', SessionImg3Controller.deleteBudda)

    //GALLERY BANNER IMAGE LIST
    app.get('/api/gallerybannerimg', GalleryBannerImgController.findAllBuda)
    app.post('/api/gallerybannerimg', GalleryBannerImgController.createBuda)
    app.get('/api/gallerybannerimg/:id', GalleryBannerImgController.findOneBuda)
    app.put('/api/gallerybannerimg/:id', GalleryBannerImgController.updateBudda)
    app.delete('/api/gallerybannerimg/:id', GalleryBannerImgController.deleteBudda)
    //GALLERY BANNER VID LIST
    app.get('/api/gallerybannervid', GalleryBannerVidController.findAllBuda)
    app.post('/api/gallerybannervid', GalleryBannerVidController.createBuda)
    app.get('/api/gallerybannervid/:id', GalleryBannerVidController.findOneBuda)
    app.put('/api/gallerybannervid/:id', GalleryBannerVidController.updateBudda)
    app.delete('/api/gallerybannervid/:id', GalleryBannerVidController.deleteBudda)
    //GALLERY BANNER VID OR IMAGE TRACKER
    app.get('/api/gallerybannervidorimg', GalleryBannerVidOrImgController.findAllBuda)
    app.post('/api/gallerybannervidorimg', GalleryBannerVidOrImgController.createBuda)
    app.get('/api/gallerybannervidorimg/:id', GalleryBannerVidOrImgController.findOneBuda)
    app.put('/api/gallerybannervidorimg/:id', GalleryBannerVidOrImgController.updateBudda)
    app.delete('/api/gallerybannervidorimg/:id', GalleryBannerVidOrImgController.deleteBudda)


    // BUDA ADMIN LIST
    app.get('/api/budaadmin', BudaAdminController.findAllBudaAdmin)
    app.get('/api/budaadmin/:id', BudaAdminController.findOneBudaAdmin)
    app.post('/api/budaadmin', BudaAdminController.createBudaAdmin)
    app.put('/api/budaadmin/:id', BudaAdminController.updateBuddaAdmin)
    app.delete('/api/budaadmin', BudaAdminController.deleteBuddaAdmin)
    app.post('/api/budaadmin/check', BudaAdminController.setBudaAdmin)

    // BUDA CREW ADMIN LIST
    app.get('/api/budacrewadmin', BudaCrewAdminController.findAllBudaAdmin)
    app.get('/api/budacrewadmin/:id', BudaCrewAdminController.findOneBudaAdmin)
    app.post('/api/budacrewadmin', BudaCrewAdminController.createBudaAdmin)
    app.put('/api/budacrewadmin/:id', BudaCrewAdminController.updateBuddaAdmin)
    app.delete('/api/budacrewadmin', BudaCrewAdminController.deleteBuddaAdmin)
    app.post('/api/budacrewadmin/check', BudaCrewAdminController.setBudaCrewAdmin)

    //BUDA CREW IMAGE
    app.get('/api/budacrewimg', BudaCrewImgController.findAllBuda)
    app.post('/api/budacrewimg', BudaCrewImgController.createBuda)
    app.get('/api/budacrewimg/:id', BudaCrewImgController.findOneBuda)
    app.put('/api/budacrewimg/:id', BudaCrewImgController.updateBudda)
    app.delete('/api/budacrewimg/:id', BudaCrewImgController.deleteBudda)

    //CREW BANNER IMAGE LIST
    app.get('/api/crewbannerimg', CrewBannerImgController.findAllBuda)
    app.post('/api/crewbannerimg', CrewBannerImgController.createBuda)
    app.get('/api/crewbannerimg/:id', CrewBannerImgController.findOneBuda)
    app.put('/api/crewbannerimg/:id', CrewBannerImgController.updateBudda)
    app.delete('/api/crewbannerimg/:id', CrewBannerImgController.deleteBudda)
    //CREW BANNER VIDEO LIST
    app.get('/api/crewbannervid', CrewBannerVidController.findAllBuda)
    app.post('/api/crewbannervid', CrewBannerVidController.createBuda)
    app.get('/api/crewbannervid/:id', CrewBannerVidController.findOneBuda)
    app.put('/api/crewbannervid/:id', CrewBannerVidController.updateBudda)
    app.delete('/api/crewbannervid/:id', CrewBannerVidController.deleteBudda)
    //CREW BANNER VIDEO OR IMAGE LIST
    app.get('/api/crewbannervidorimg', CrewBannerVidOrImgController.findAllBuda)
    app.post('/api/crewbannervidorimg', CrewBannerVidOrImgController.createBuda)
    app.get('/api/crewbannervidorimg/:id', CrewBannerVidOrImgController.findOneBuda)
    app.put('/api/crewbannervidorimg/:id', CrewBannerVidOrImgController.updateBudda)
    app.delete('/api/crewbannervidorimg/:id', CrewBannerVidOrImgController.deleteBudda)

    // BUDA CREW INFO LIST
    app.get('/api/budacrewinfo', BudaCrewInfoController.findAllBuda)
    app.get('/api/budacrewinfo/:id', BudaCrewInfoController.findOneBuda)
    app.post('/api/budacrewinfo', BudaCrewInfoController.createBuda)
    app.put('/api/budacrewinfo/:id', BudaCrewInfoController.updateBudda)
    app.delete('/api/budacrewinfo', BudaCrewInfoController.deleteBudda)

    // BUDA CREW MUSIC LIST
    app.get('/api/budacrewmusic', BudaCrewMusicController.findAllBuda)
    app.get('/api/budacrewmusic/:id', BudaCrewMusicController.findOneBuda)
    app.post('/api/budacrewmusic', BudaCrewMusicController.createBuda)
    app.put('/api/budacrewmusic/:id', BudaCrewMusicController.updateBudda)
    app.delete('/api/budacrewmusic/:id', BudaCrewMusicController.deleteBudda)

    // BUDA CREW VIDEO LIST
    app.get('/api/budacrewvideo', BudaCrewVideoController.findAllBuda)
    app.get('/api/budacrewvideo/:id', BudaCrewVideoController.findOneBuda)
    app.post('/api/budacrewvideo', BudaCrewVideoController.createBuda)
    app.put('/api/budacrewvideo/:id', BudaCrewVideoController.updateBudda)
    app.delete('/api/budacrewvideo/:id', BudaCrewVideoController.deleteBudda)

    // BUDA CREW MEMBER INFO LIST
    app.get('/api/budacrewmemberinfo', BudaCrewMemberInfoController.findAllBuda)
    app.get('/api/budacrewmemberinfo/:id', BudaCrewMemberInfoController.findOneBuda)
    app.post('/api/budacrewmemberinfo', BudaCrewMemberInfoController.createBuda)
    app.put('/api/budacrewmemberinfo/:id', BudaCrewMemberInfoController.updateBudda)
    app.delete('/api/budacrewmemberinfo', BudaCrewMemberInfoController.deleteBudda)

    //MEMBER BANNER IMAGE LIST
    app.get('/api/memberbannerimg', MemberBannerImgController.findAllBuda)
    app.post('/api/memberbannerimg', MemberBannerImgController.createBuda)
    app.get('/api/memberbannerimg/:id', MemberBannerImgController.findOneBuda)
    app.put('/api/memberbannerimg/:id', MemberBannerImgController.updateBudda)
    app.delete('/api/memberbannerimg/:id', MemberBannerImgController.deleteBudda)
    //MEMBER BANNER VIDEO LIST
    app.get('/api/memberbannervid', MemberBannerVidController.findAllBuda)
    app.post('/api/memberbannervid', MemberBannerVidController.createBuda)
    app.get('/api/memberbannervid/:id', MemberBannerVidController.findOneBuda)
    app.put('/api/memberbannervid/:id', MemberBannerVidController.updateBudda)
    app.delete('/api/memberbannervid/:id', MemberBannerVidController.deleteBudda)
    //MEMBER BANNER VIDEO OR IMAGE TRACKER
    app.get('/api/memberbannervidorimg', MemberBannerVidOrImgController.findAllBuda)
    app.post('/api/memberbannervidorimg', MemberBannerVidOrImgController.createBuda)
    app.get('/api/memberbannervidorimg/:id', MemberBannerVidOrImgController.findOneBuda)
    app.put('/api/memberbannervidorimg/:id', MemberBannerVidOrImgController.updateBudda)
    app.delete('/api/memberbannervidorimg/:id', MemberBannerVidOrImgController.deleteBudda)

    //MEMBER IMAGE LIST
    app.get('/api/memberimg', MemberImgController.findAllBuda)
    app.post('/api/memberimg', MemberImgController.createBuda)
    app.get('/api/memberimg/:id', MemberImgController.findOneBuda)
    app.put('/api/memberimg/:id', MemberImgController.updateBudda)
    app.delete('/api/memberimg/:id', MemberImgController.deleteBudda)


    //LANDING PAGE MAIN IMG
    app.get('/api/landingpagemainimg', LandingPageMainImgController.findAllBuda)
    app.post('/api/landingpagemainimg', LandingPageMainImgController.createBuda)
    app.get('/api/landingpagemainimg/:id', LandingPageMainImgController.findOneBuda)
    app.put('/api/landingpagemainimg/:id', LandingPageMainImgController.updateBudda)
    app.delete('/api/landingpagemainimg/:id', LandingPageMainImgController.deleteBudda)
    //LANDING PAGE CARD 1
    app.get('/api/landingpagecard1', LandingPageCard1Controller.findAllBuda)
    app.post('/api/landingpagecard1', LandingPageCard1Controller.createBuda)
    app.get('/api/landingpagecard1/:id', LandingPageCard1Controller.findOneBuda)
    app.put('/api/landingpagecard1/:id', LandingPageCard1Controller.updateBudda)
    app.delete('/api/landingpagecard1/:id', LandingPageCard1Controller.deleteBudda)
    //LANDING PAGE CARD 2
    app.get('/api/landingpagecard2', LandingPageCard2Controller.findAllBuda)
    app.post('/api/landingpagecard2', LandingPageCard2Controller.createBuda)
    app.get('/api/landingpagecard2/:id', LandingPageCard2Controller.findOneBuda)
    app.put('/api/landingpagecard2/:id', LandingPageCard2Controller.updateBudda)
    app.delete('/api/landingpagecard2/:id', LandingPageCard2Controller.deleteBudda)
    //LANDING PAGE CARD 3
    app.get('/api/landingpagecard3', LandingPageCard3Controller.findAllBuda)
    app.post('/api/landingpagecard3', LandingPageCard3Controller.createBuda)
    app.get('/api/landingpagecard3/:id', LandingPageCard3Controller.findOneBuda)
    app.put('/api/landingpagecard3/:id', LandingPageCard3Controller.updateBudda)
    app.delete('/api/landingpagecard3/:id', LandingPageCard3Controller.deleteBudda)
    //LANDING PAGE VIDEO 1
    app.get('/api/landingpagevid1', LandingPageVid1Controller.findAllBuda)
    app.post('/api/landingpagevid1', LandingPageVid1Controller.createBuda)
    app.get('/api/landingpagevid1/:id', LandingPageVid1Controller.findOneBuda)
    app.put('/api/landingpagevid1/:id', LandingPageVid1Controller.updateBudda)
    app.delete('/api/landingpagevid1/:id', LandingPageVid1Controller.deleteBudda)
    //LANDING PAGE VIDEO 2
    app.get('/api/landingpagevid2', LandingPageVid2Controller.findAllBuda)
    app.post('/api/landingpagevid2', LandingPageVid2Controller.createBuda)
    app.get('/api/landingpagevid2/:id', LandingPageVid2Controller.findOneBuda)
    app.put('/api/landingpagevid2/:id', LandingPageVid2Controller.updateBudda)
    app.delete('/api/landingpagevid2/:id', LandingPageVid2Controller.deleteBudda)

    //GALLERY VIDEO LIST
    app.get('/api/galleryvids', GalleryVidsController.findAllBuda)
    app.post('/api/galleryvids', GalleryVidsController.createBuda)
    app.get('/api/galleryvids/:id', GalleryVidsController.findOneBuda)
    app.put('/api/galleryvids/:id', GalleryVidsController.updateBudda)
    app.delete('/api/galleryvids/:id', GalleryVidsController.deleteBudda)

    //GALLERY IMG LIST
    app.get('/api/galleryimgs', GalleryImgsController.findAllBuda)
    app.post('/api/galleryimgs', GalleryImgsController.createBuda)
    app.get('/api/galleryimgs/:id', GalleryImgsController.findOneBuda)
    app.put('/api/galleryimgs/:id', GalleryImgsController.updateBudda)
    app.delete('/api/galleryimgs/:id', GalleryImgsController.deleteBudda)

}