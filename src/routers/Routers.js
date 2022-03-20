const express = require('express')
const router = express.Router();

const homeController = require ('../controllers/homeController.js')
const politicsController = require ('../controllers/politicsController.js')
const aboutController = require ('../controllers/aboutController.js')
const historyController = require ('../controllers/historyController.js')

const stateServiceController = require ('../controllers/historyController')
const dddCityController = require ('../controllers/historyController')

const dddServiceController = require ('../controllers/dddServiceController')


router.get('/', homeController.home)
router.get('/politics', politicsController.politics)
router.get('/about', aboutController.about)
router.get('/history', historyController.history)

router.get('/:estado', stateServiceController.history)
router.get('/:estados/:ddd', dddCityController.history)


router.get(`/api/ddd/:codigo`, dddServiceController.dddService)



module.exports = router