const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const setting = require('../config/config');
// Require the controllers WHICH WE DID NOT CREATE YET!!
const payment_controller = require('../controllers/payment.controller');


 
router.post('/add', payment_controller.add);
// router.get('/all', user_controller.all);
// router.get('/:id', user_controller.product_details);
// router.put('/:id/update', user_controller.product_update);
// router.delete('/:id/delete', user_controller.product_delete);
module.exports = router;