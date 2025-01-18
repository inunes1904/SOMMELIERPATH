const feedbackService = require('../services/feedbackService');
const configuracaoService = require('../services/configuracaoService');
const { getStringFeedback } = require('../utils/feedbackUtils');
const Observer = require('./Observer');

class FeedbackObserver extends Observer {
  async update(data) {
    try {
      const { avaliacao, inputData } = data;

      // Fetch Configuracao associated with the Avaliacao
      const configuracao = await configuracaoService.getConfiguracaoById(inputData.configuracaoId);

      // Generate feedback string
      const feedbackString = getStringFeedback(inputData, configuracao);

      // Create Feedback
      await feedbackService.createFeedback({
        descricaoFeedback: feedbackString,
        avaliacaoId: avaliacao._id,
        userId: inputData.userId,
      });

      console.log('Feedback created for Avaliacao:', avaliacao._id);
    } catch (error) {
      console.error('Error creating feedback for Avaliacao:', error.message);
    }
  }
}

module.exports = FeedbackObserver;
