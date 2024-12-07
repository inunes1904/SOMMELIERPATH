const express = require('express');
const avaliacaoController = require('../controllers/avaliacaoController');
const {hasRole} = require("../middlewares/authMiddleware");
const {verifyToken} = require("../utils/authUtils");


const router = express.Router();

router.use(verifyToken);

router.post('/', avaliacaoController.create); // Create a new avaliacao
router.get('/', avaliacaoController.getAll); // Get all avaliacao
router.get('/:id', avaliacaoController.getById); // Get a single avaliacao
router.put('/:id', hasRole('admin'), avaliacaoController.update); // Update a avaliacao
router.delete('/:id', hasRole('admin'), avaliacaoController.delete); // Delete a avaliacao

module.exports = router;
