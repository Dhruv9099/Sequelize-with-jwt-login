const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');
// const request = require("supertest");

router.get('/', function (req, res) {
    res.send("you are enter at auth.routes.js ")
});

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/allsignupusers',authController.AllSignUpUser)

module.exports = router;
// /api/auth/signup