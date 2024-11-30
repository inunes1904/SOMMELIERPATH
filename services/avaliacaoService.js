const avalicaoRepository = require('../data/avaliacaoRepository');

class AvaliacaoService {
  async createAvaliacao(data) {
    return await avaliacaoRepository.create(data);
  }

  async getAllAvaliacoes() {
    return await avaliacaoRepository.findAll();
  }

  async getAvaliacaoById(id) {
    const avaliacao = await avaliacaoRepository.findById(id);
    if (!avaliacao) {
      throw new Error('Avaliação não encontrada.');
    }
    return configuracao;
  }

  async updateAvaliacao(id, data) {
    const avaliacao = await avaliacaoRepository.updateById(id, data);
    if (!avaliacao) {
      throw new Error('Avaliação não encontrada.');
    }
    return configuracao;
  }

  async deleteAvaliacao(id) {
    const avaliacao = await avaliacaoRepository.deleteById(id);
    if (!avaliacao) {
      throw new Error('Avaliação não encontrada.');
    }
    return avaliacao;
  }
}

module.exports = new AvaliacaoService();
