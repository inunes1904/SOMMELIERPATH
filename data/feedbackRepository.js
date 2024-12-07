const Feedback = require('../models/feedbackModel');

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

  async updateById(id, data) {
    return await Feedback.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  async deleteById(id) {
    return await Feedback.findOneAndDelete({ _id: id });
  }
}

module.exports = new FeedbackRepository();
