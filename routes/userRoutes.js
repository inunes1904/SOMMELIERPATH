const express = require('express');
const userController = require('../controllers/userController');
const { isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', isAdmin, userController.updateUserRole); // Protect this route
router.delete('/:id', isAdmin, userController.deleteUser);

module.exports = router;
