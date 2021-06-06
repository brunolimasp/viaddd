const express = require('express')
const ControllerIndex = require ('../controller/Index')
var router = express.Router();

router.get('/', ControllerIndex.Index)
router.get(`/api/:codigo`, ControllerIndex.ApiDDD)
router.get('/politica', ControllerIndex.Politica)
router.get('/sobre', ControllerIndex.Sobre)
router.get('/historia', ControllerIndex.Historia)

module.exports = router