const mongoose = require('mongoose');

const ConfiguracaoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
  tipoProva: { type: String, required: true },
  pesoAroma: { type: Number, required: true },
  pesoCor: { type: Number, required: true },
  pesoSabor: { type: Number, required: true },
  pesoCorpo: { type: Number, required: true },
  pesoPersistencia: { type: Number, required: true },
  guiasDegustacao: { type: Boolean, required: true },
  dicasTemperatura: { type: Boolean, required: true },
  sugestoesAcompanhamento: { type: Boolean, required: true },
  nivelApreciacao: { type: String, required: true },
  tiposVinho: { type: [String], required: true },
  metodosDegustacao: { type: [String], required: true },
  numeroParticipantes: { type: Number, required: true },
  duracaoProva: { type: String, required: true },
  localizacao: { type: String, required: true },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

module.exports = mongoose.model('Configuracao', ConfiguracaoSchema);
