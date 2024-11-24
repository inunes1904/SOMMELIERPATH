const express = require('express');
const configuracaoController = require('../controllers/configuracaoController');
const {hasRole} = require("../middlewares/authMiddleware");

const router = express.Router();

// Protect routes for `sommelier` and `admin` roles
router.use(hasRole(['sommelier', 'admin']));

router.post('/', hasRole('sommelier', 'admin'), configuracaoController.create); // Create a new configuration
router.get('/', hasRole('sommelier', 'admin'), configuracaoController.getAll); // Get all configurations
router.get('/:id', hasRole('sommelier', 'admin'), configuracaoController.getById); // Get a single configuration
router.put('/:id',hasRole('sommelier', 'admin'), configuracaoController.update); // Update a configuration
router.delete('/:id',hasRole('sommelier', 'admin'), configuracaoController.delete); // Delete a configuration

module.exports = router;
