const express = require('express');
const router = express.Router();

const setting = require('../config/config');
// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/users.controller');
const login_controller = require('../controllers/login.controller');
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', user_controller.test);
router.post('/admin', login_controller.login);

module.exports = router;