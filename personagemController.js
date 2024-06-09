const { PersonagemDAOMongo } = require('./DAO/personagemDAO');
const { PersonagemModel } = require('./models/Personagem');

class PersonagemController {
  constructor() {
    this.personagemDAO = new PersonagemDAOMongo();
  }

  async salvarPersonagem(req, res) {
    try {
      const { comprometimento, sociabilidade, inteligencia, saude, forca } = req.body;

      const novoPersonagem = new PersonagemModel({ comprometimento, sociabilidade, inteligencia, saude, forca });
      const personagemSalvo = await novoPersonagem.save();

      if (personagemSalvo) {
        res.json({ message: 'Personagem salvo com sucesso.' });
      } else {
        res.status(500).json({ error: 'Erro ao salvar personagem no banco de dados.' });
      }
    } catch (error) {
      console.error('Erro ao salvar personagem:', error);
      res.status(500).json({ error: 'Erro ao salvar personagem no banco de dados.' });
    }
  }
}

module.exports = { PersonagemController };
