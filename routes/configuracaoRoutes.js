const express = require('express');
const configuracaoController = require('../controllers/configuracaoController');
const { hasRole } = require("../middlewares/authMiddleware");
const { verifyToken } = require("../utils/authUtils");

const router = express.Router();

// Ensure token verification happens before any role checking or controller logic
// router.use(verifyToken);

// Define routes with role-based access hasRole('sommelier', 'admin'),
router.post('/deploy-atividade', configuracaoController.create);
router.get('/configuracao', configuracaoController.getAll);
router.get('/json-params-atividade', configuracaoController.getParameters);
router.get('/configuracao/:id', configuracaoController.getById);
router.put('/configuracao/:id', configuracaoController.update);
router.delete('/configuracao/:id', configuracaoController.delete);
//router.get('/lista-analytics-atividade/:id', configuracaoController.getAnalyticsActivityById);
router.get('/lista-analytics-atividade', configuracaoController.getAnalyticsActivity);


module.exports = router;
