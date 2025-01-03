const express = require('express');
const userController = require('../controllers/userController');
const { hasRole } = require('../middlewares/authMiddleware');
const {verifyToken} = require("../utils/authUtils");

const router = express.Router();

router.get('/users', verifyToken, hasRole('admin'), userController.getAllUsers);
router.get('/users/:id',verifyToken,  hasRole('admin'), userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', verifyToken,  userController.updateUser);
router.delete('/users/:id', verifyToken, hasRole('admin'), userController.deleteUser);

module.exports = router;
