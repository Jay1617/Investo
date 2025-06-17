const express = require('express');
const Router = express.Router();
const authController = require('../Controller/userContoller');

const router = express.Router();

router.route('/signup').post(authController.signupUser);
router.route('/signin').post(authController.signinUser);


module.exports = router;