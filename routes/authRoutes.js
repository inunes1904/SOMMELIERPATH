const express = require('express');
const AuthController = require('../controllers/AuthController');
const { verifyToken, getUserInfo } = require('../utils/authUtils');

const router = express.Router();

router.post('/login', AuthController.login);
router.get('/user', verifyToken, getUserInfo);

module.exports = router;
