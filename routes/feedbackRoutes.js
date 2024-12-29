const express = require('express');
const feedbackController = require('../controllers/feedbackController');
const {verifyToken} = require("../utils/authUtils");
const {hasRole} = require("../middlewares/authMiddleware");


const router = express.Router();

router.use(verifyToken);

router.post('/', feedbackController.create); // Create a new feedback
router.get('/', feedbackController.getAll); // Get all feedbacks
router.get('/:id', feedbackController.getById); // Get a single feedback
router.get('/avaliacao/:avaliacaoId', feedbackController.getByAvaliacaoId); // Get a single feedback by avaliacaoId
router.put('/:id', feedbackController.update); // Update a feedback
//router.put('/:id', hasRole('admin'), feedbackController.update); // Update a feedback
router.delete('/:id',feedbackController.delete); // Delete a feedback
//router.delete('/:id', hasRole('admin'), feedbackController.delete); // Delete a feedback

module.exports = router;
