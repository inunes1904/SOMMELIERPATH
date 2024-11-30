const express = require('express');
const avaliacaoController = require('../controllers/avaliacaoController');
const {hasRole} = require("../middlewares/authMiddleware");


const router = express.Router();

// Protect routes for `sommelier` and `admin` roles
router.use(hasRole(['sommelier', 'admin', 'user']));

router.post('/', hasRole('sommelier', 'admin'), avaliacaoController.create); // Create a new configuration
router.get('/', hasRole('sommelier', 'admin'), avaliacaoController.getAll); // Get all configurations
router.get('/:id', hasRole('sommelier', 'admin'), avaliacaoController.getById); // Get a single configuration
router.put('/:id',hasRole('sommelier', 'admin'), avaliacaoController.update); // Update a configuration
router.delete('/:id',hasRole('sommelier', 'admin'), avaliacaoController.delete); // Delete a configuration

module.exports = router;
