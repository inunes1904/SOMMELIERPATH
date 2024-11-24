const configuracaoService = require('../services/configuracaoService');

class ConfiguracaoController {
  async create(req, res) {
    try {
      const { userId } = req.user; // Extract userId from authenticated request
      const data = { ...req.body, userId };
      const configuracao = await configuracaoService.createConfiguracao(data);
      res.status(201).json(configuracao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const configuracoes = await configuracaoService.getAllConfiguracoes();
      res.status(200).json(configuracoes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const configuracao = await configuracaoService.getConfiguracaoById(id);
      res.status(200).json(configuracao);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const configuracao = await configuracaoService.updateConfiguracao(id, req.body);
      res.status(200).json(configuracao);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await configuracaoService.deleteConfiguracao(id);
      res.status(200).json({ message: 'Configuração excluída com sucesso.' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new ConfiguracaoController();
