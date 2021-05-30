const express = require('express')
const ControllerIndex = require ('../controller/Index')
var router = express.Router();

router.get('/', ControllerIndex.Index)
router.get(`/api/:codigo`, ControllerIndex.ApiDDD)
router.get('/donatepicpay', ControllerIndex.DonatePicpay)

module.exports = router