const express = require('express');
const authController = require('../controllers/AuthController');
const { verifyToken, getUserInfo } = require('../utils/authUtils');

const router = express.Router();

router.post('/login', authController.login);
router.get('/user', verifyToken, getUserInfo);

module.exports = router;
