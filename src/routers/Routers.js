const express = require('express')
const ControllerIndex = require ('../controller/Index')
var router = express.Router();

router.get('/', ControllerIndex.Index)


module.exports = router