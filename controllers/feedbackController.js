const feedbackService = require('../services/feedbackService');

class AvaliacaoController {

  async create(req, res) {
    try {
      const { userId } = req.user; // Extract userId from authenticated request
      const data = { ...req.body, userId };
      const feedback = await feedbackService.createFeedback(data);
      res.status(201).json(feedback);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try{
      const feedbacks =  await feedbackService.getAllFeedbacks();
      res.status(200).json(feedbacks);
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const feedback = await feedbackService.getFeedbackById(id);
      res.status(200).json(feedback);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getByAvaliacaoId(req, res) {
    try {
      const { avaliacaoId } = req.params;
      const feedback = await feedbackService.findFeedbackByAvaliacaoId(avaliacaoId);
      res.status(200).json(feedback);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const feedback = await feedbackService.updateFeedback(id, req.body);
      res.status(200).json(feedback);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await feedbackService.deleteAvaliacao(id);
      res.status(200).json({ message: 'Feedback excluída com sucesso.' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}


module.exports = new AvaliacaoController();
