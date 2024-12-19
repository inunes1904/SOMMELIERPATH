const express = require('express');
const configuracaoController = require('../controllers/configuracaoController');
const { hasRole } = require("../middlewares/authMiddleware");
const { verifyToken } = require("../utils/authUtils");

const router = express.Router();

// Ensure token verification happens before any role checking or controller logic
// router.use(verifyToken);

// Define routes with role-based access hasRole('sommelier', 'admin'),
router.post('/', configuracaoController.create);
router.get('/all', configuracaoController.getAll);
router.get('/', configuracaoController.getParameters);
router.get('/:id', configuracaoController.getById);
router.put('/:id', configuracaoController.update);
router.delete('/:id', configuracaoController.delete);

module.exports = router;
