const express = require('express');
const configuracaoController = require('../controllers/configuracaoController');
const { hasRole } = require("../middlewares/authMiddleware");
const { verifyToken } = require("../utils/authUtils");

const router = express.Router();

// Ensure token verification happens before any role checking or controller logic
router.use(verifyToken);

// Define routes with role-based access
router.post('/', hasRole('sommelier', 'admin'), configuracaoController.create);
router.get('/', hasRole('sommelier', 'admin', 'user'), configuracaoController.getAll);
router.get('/:id', hasRole('sommelier', 'admin', 'user'), configuracaoController.getById);
router.put('/:id', hasRole('sommelier', 'admin'), configuracaoController.update);
router.delete('/:id', hasRole('sommelier', 'admin'), configuracaoController.delete);

module.exports = router;
