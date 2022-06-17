const express = require("express");
const router = express.Router();
const cowinController = require('../controllers/cowinController')
const weatherController = require('../controllers/weatherController')
const memeController = require('../controllers/memeController')


router.get("/getStates", cowinController.getStates);
router.get("/getDistrictsByStateId/:stateId", cowinController.getDistricts);
router.get("/sessionByPin" , cowinController.getByPin)
router.post("/generateOtp" , cowinController.getOtp)
router.get("/getSessionByDistrictId" , cowinController.getSession)

router.get("/Weather" , weatherController.getWeather)
router.get("/SortedCities" , weatherController.getSortedCities)


router.post("/getMeme" , memeController.getMeme)

module.exports = router;



module.exports = router;