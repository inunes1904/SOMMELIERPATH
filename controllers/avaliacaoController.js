const avaliacaoService = require('../services/avaliacaoService');

class AvaliacaoController {

  async create(req, res) {
    try {
      const { userId } = req.user; // Extract userId from authenticated request
      const data = { ...req.body, userId };
      const avaliacao = await avaliacaoService.createAvaliacao(data);
      res.status(201).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try{
      const avaliacoes =  await avaliacaoService.getAllAvaliacoes();
      res.status(200).json(avaliacoes);
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const avaliacao = await avaliacaoService.getAvaliacaoById(id);
      res.status(200).json(avaliacao);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const avaliacao = await avaliacaoService.updateAvaliacao(id, req.body);
      res.status(200).json(avaliacao);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await avaliacaoService.deleteAvaliacao(id);
      res.status(200).json({ message: 'Avaliação excluída com sucesso.' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}


module.exports = new AvaliacaoController();
