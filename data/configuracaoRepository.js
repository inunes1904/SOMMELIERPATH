const Configuracao = require('../models/configuracaoModel');

class ConfiguracaoRepository {
  async create(data) {
    return await Configuracao.create(data);
  }

  async findAll() {
    return await Configuracao.find();
  }

  async findById(id) {
    return await Configuracao.findById(id);
  }

  async updateById(id, data) {
    return await Configuracao.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  async deleteById(id) {
    return await Configuracao.findOneAndDelete({ _id: id });
  }
}

module.exports = new ConfiguracaoRepository();
