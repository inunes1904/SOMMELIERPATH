const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  descricaoFeedback: { type: String, required: true },
  avaliacaoId: { type:mongoose.Schema.Types.ObjectId, ref: 'Avaliacao', required:true },// Reference to Avaliacao model
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

module.exports = mongoose.model('Feedback', FeedbackSchema);
