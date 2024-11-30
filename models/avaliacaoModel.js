const mongoose = require('mongoose');

const AvaliacaoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  configuracaoId: { type:mongoose.Schema.Types.ObjectId, ref: 'Configuracao', required:true },// Reference to Configuracao model
  pesoAroma: { type: Number, required: true },
  pesoCor: { type: Number, required: true },
  pesoSabor: { type: Number, required: true },
  pesoCorpo: { type: Number, required: true },
  pesoPersistencia: { type: Number, required: true },
  isConfiguracao:{ type: Boolean, required: true },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

module.exports = mongoose.model('Avaliacao', AvaliacaoSchema);
