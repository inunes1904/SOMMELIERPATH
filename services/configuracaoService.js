const configuracaoRepository = require('../data/configuracaoRepository');

class ConfiguracaoService {
  async createConfiguracao(data) {
    return await configuracaoRepository.create(data);
  }

  async getAllConfiguracoes() {
    return await configuracaoRepository.findAll();
  }

  async getConfiguracaoById(id) {
    const configuracao = await configuracaoRepository.findById(id);
    if (!configuracao) {
      throw new Error('Configuração não encontrada.');
    }
    return configuracao;
  }

  async updateConfiguracao(id, data) {
    const configuracao = await configuracaoRepository.updateById(id, data);
    if (!configuracao) {
      throw new Error('Configuração não encontrada.');
    }
    return configuracao;
  }

  async deleteConfiguracao(id) {
    const configuracao = await configuracaoRepository.deleteById(id);
    if (!configuracao) {
      throw new Error('Configuração não encontrada.');
    }
    return configuracao;
  }
}

module.exports = new ConfiguracaoService();
