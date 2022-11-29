const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const setting = require('../config/config');
// Require the controllers WHICH WE DID NOT CREATE YET!!
const misc_controller = require('../controllers/misc.controller');


 

router.post('/create', misc_controller.newbook);

module.exports = router;