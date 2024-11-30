const Avaliacao = require('../models/avaliacaoModel');

class AvaliacaoRepository {
  async create(data) {
    return await Avaliacao.create(data);
  }

  async findAll() {
    return await Avaliacao.find();
  }

  async findById(id) {
    return await Avaliacao.findById(id);
  }

  async updateById(id, data) {
    return await Avaliacao.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  async deleteById(id) {
    return await Avaliacao.findOneAndDelete({ _id: id });
  }
}

module.exports = new AvaliacaoRepository();
