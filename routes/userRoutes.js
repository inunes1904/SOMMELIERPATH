const express = require('express');
const userController = require('../controllers/userController');
const { hasRole } = require('../middlewares/authMiddleware');
const {verifyToken} = require("../utils/authUtils");

const router = express.Router();

router.get('/', verifyToken, hasRole('admin'), userController.getAllUsers);
router.get('/:id',verifyToken,  hasRole('admin'), userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', verifyToken,  userController.updateUser);
router.delete('/:id', verifyToken, hasRole('admin'), userController.deleteUser);

module.exports = router;
