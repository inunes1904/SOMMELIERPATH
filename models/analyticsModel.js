const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  qualAnalytics: {
    tipoProva:{ type: String, required: true },
    nivelApreciacao: { type: String, required: true },
    tipoVinho: { type: String, required: true },
  },
  quantAnalytics: {
    avgPesoAroma: { type: Number, required: true },
    avgPesoCor: { type: Number, required: true },
    avgPesoSabor: { type: Number, required: true },
    avgPesoCorpo: { type: Number, required: true },
    avgPesoPersistencia: { type: Number, required: true },
  },
  configuracaoId: { type:mongoose.Schema.Types.ObjectId, ref: 'Configuracao', required:true },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

module.exports = mongoose.model('Analytics', AnalyticsSchema);
