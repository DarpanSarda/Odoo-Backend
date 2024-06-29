const express = require('express');
const LoginController = require('../../Controller/Users/LoginController');
const RegisterController = require('../../Controller/Users/ReisterController');
const getUserProfile = require('../../Controller/Users/UserProfileController');
const router = express.Router();

console.log("hello")
console.log(router)
router.post("/register",RegisterController);
router.post('/login',LoginController);
router.get('/profile',getUserProfile);

module.exports = router;