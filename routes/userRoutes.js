const express = require('express');
const userController = require('../controllers/userController');
const { hasRole } = require('../middlewares/authMiddleware');
const {verifyToken} = require("../utils/authUtils");

const router = express.Router();

router.get('/', hasRole(['admin']), userController.getAllUsers);
router.get('/:id', hasRole(['admin']), userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', verifyToken,  userController.updateUser);
router.delete('/:id', hasRole(['admin']), userController.deleteUser);

module.exports = router;
