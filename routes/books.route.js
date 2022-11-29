const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const setting = require('../config/config');
// Require the controllers WHICH WE DID NOT CREATE YET!!
const book_utils = require('../utils/newbook.utils');


 

router.post('/create', book_utils.newbook);

module.exports = router;