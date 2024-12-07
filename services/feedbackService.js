const feedbackRepository = require('../data/feedbackRepository');

class FeedbackService {
  async createFeedback(data) {
    return await feedbackRepository.create(data);
  }

  async getAllFeedbacks() {
    return await feedbackRepository.findAll();
  }

  async getFeedbackById(id) {
    const feedback = await feedbackRepository.findById(id);
    if (!feedback) {
      throw new Error('Feedback não encontrado.');
    }
    return feedback;
  }

  async findFeedbackByAvaliacaoId(avaliacaoId) {
    const feedback = await feedbackRepository.findFeedbackByAvaliacaoId(avaliacaoId);
    if (!feedback) {
      throw new Error('Feedback não encontrado.');
    }
    return feedback;
  }

  async updateFeedback(id, data) {
    const feedback = await feedbackRepository.updateById(id, data);
    if (!feedback) {
      throw new Error('Feedback não encontrado.');
    }
    return feedback;
  }

  async deleteAvaliacao(id) {
    const avaliacao = await feedbackRepository.deleteById(id);
    if (!avaliacao) {
      throw new Error('Feedback não encontrado.');
    }
    return avaliacao;
  }
}

module.exports = new FeedbackService();
