const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const setting = require('../config/config');
// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/users.controller');


 
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', user_controller.test);
router.post('/create', user_controller.user_create);
router.get('/:id', user_controller.product_details);
router.put('/:id/update', user_controller.product_update);
router.delete('/:id/delete', user_controller.product_delete);
module.exports = router;