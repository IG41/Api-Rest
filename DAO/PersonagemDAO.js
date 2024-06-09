const { PersonagemModel } = require('../models/Personagem');

class PersonagemDAOMongo {
  async salvar(personagem) {
    console.log('Salvando personagem no banco de dados:', personagem);

    try {
      const personagemModel = new PersonagemModel(personagem);
      const result = await personagemModel.save();

      console.log('Personagem salvo com sucesso.');
      return true;
    } catch (err) {
      console.error('Erro ao salvar personagem:', err);
      return false;
    }
  }
}

module.exports = { PersonagemDAOMongo };
