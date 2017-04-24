var express = require('express');
var router = express.Router();
var home = require('../controller/home.controller.js')


router
	.route('/')
	.get(home.homePage)

module.exports = router;