const avaliacaoService = require('../services/avaliacaoService');
const configuracaoService = require('../services/configuracaoService');
const feedbackService = require('../services/feedbackService');
const {config} = require("dotenv");
const {getStringFeedback} = require("../utils/feedbackUtils");

class AvaliacaoController {

  async create(req, res) {
    try {
      const { userId } = req.user; // Extract userId from authenticated request
      const data = { ...req.body, userId };
      const avaliacao = await avaliacaoService.createAvaliacao(data);
      const configuracao = await configuracaoService.getConfiguracaoById(data.configuracaoId);
      let result = getStringFeedback(data, configuracao);
      const feedback = await feedbackService.createFeedback(
        {"descricaoFeedback": result, "avaliacaoId": avaliacao._id, "userId":userId} );
      res.status(201).json({avaliacao, feedback});
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
