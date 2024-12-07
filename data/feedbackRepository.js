
const Feedback = require('../models/feedbackModel');
const {Types} = require("mongoose");

class FeedbackRepository {
  async create(data) {
    return await Feedback.create(data);
  }

  async findAll() {
    return await Feedback.find();
  }

  async findById(id) {
    return await Feedback.findById(id);
  }

  async findFeedbackByAvaliacaoId(avaliacaoId) {
    try {
      // Explicitly cast avaliacaoId to ObjectId
      const objectId = new Types.ObjectId(avaliacaoId);

      // Use `findOne` to retrieve a single feedback based on `avaliacaoId`
      const feedback = await Feedback.findOne({ avaliacaoId: objectId });
      return feedback; // Return the found feedback
    } catch (error) {
      throw new Error('Erro ao encontrar feedbak pelo id da avaliacao.');
    }
  }

  async updateById(id, data) {
    return await Feedback.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  async deleteById(id) {
    return await Feedback.findOneAndDelete({ _id: id });
  }
}

module.exports = new FeedbackRepository();
