const express = require('express');
const userController = require('../controllers/userController');
const { hasRole } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', hasRole('admin'), userController.updateUserRole); // Protect this route
router.delete('/:id', hasRole('admin'), userController.deleteUser);

module.exports = router;
