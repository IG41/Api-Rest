const { ListaModel } = require('../models/Lista');

class ListaDAO {
  async salvar(lista) {
    try {
      if (!lista) {
        throw new Error('Lista inválida.');
      }

      console.log('Salvando lista no banco de dados:', lista);

      const listaModel = new ListaModel(lista);
      await listaModel.save();

      console.log('Lista salva com sucesso.');
      return true;
    } catch (error) {
      console.error('Erro ao salvar lista:', error);
      return false;
    }
  }
}

module.exports = { ListaDAO };
