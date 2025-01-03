const express = require('express');
const avaliacaoController = require('../controllers/avaliacaoController');
const {hasRole} = require("../middlewares/authMiddleware");
const {verifyToken} = require("../utils/authUtils");


const router = express.Router();

// router.use(verifyToken);

router.post('/avaliacao', avaliacaoController.create); // Create a new avaliacao
router.get('/avaliacao', avaliacaoController.getAll); // Get all avaliacao
router.get('/avaliacao/:id', avaliacaoController.getById); // Get a single avaliacao
router.put('/avaliacao/:id', avaliacaoController.update); // Update a avaliacao
//router.put('/:id', hasRole('admin'), avaliacaoController.update); // Update a avaliacao
router.delete('/avaliacao/:id', avaliacaoController.delete); // Delete a avaliacao
//router.delete('/:id', hasRole('admin'), avaliacaoController.delete); // Delete a avaliacao

module.exports = router;
