const avaliacaoRepository = require('../data/avaliacaoRepository');

class AvaliacaoService {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(data) {
    this.observers.forEach((observer) => observer.update(data));
  }

  async createAvaliacao(data) {
    const avaliacao = await avaliacaoRepository.create(data);

    // Notify all observers
    this.notifyObservers({ avaliacao, inputData: data });

    return avaliacao;
  }

  async getAllAvaliacoes() {
    return await avaliacaoRepository.findAll();
  }

  async getAvaliacaoById(id) {
    const avaliacao = await avaliacaoRepository.findById(id);
    if (!avaliacao) {
      throw new Error('Avaliação não encontrada.');
    }
    return avaliacao;
  }

  async updateAvaliacao(id, data) {
    const avaliacao = await avaliacaoRepository.updateById(id, data);
    if (!avaliacao) {
      throw new Error('Avaliação não encontrada.');
    }
    return avaliacao;
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
