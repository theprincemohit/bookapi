const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const setting = require('../config/config');
// Require the controllers WHICH WE DID NOT CREATE YET!!
const misc_controller = require('../controllers/misc.controller');


 

router.post('/create', misc_controller.newbook);
router.get('/getbooks', misc_controller.getbooks); 
router.get('/getbookByUserId/:userId', misc_controller.getbookByUserId); 
router.get('/getbookByBookId/:bookId', misc_controller.getbookByBookId); 
router.get('/paymentsByBookId', misc_controller.paymentsByBookId);
module.exports = router;