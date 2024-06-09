const { ListaDAO } = require('./DAO/listaDAO');
const { Lista } = require('./models/Lista');

class ListaController {
  constructor() {
    this.listaDAO = new ListaDAO();

    // Verifica se a propriedade listaDAO foi definida corretamente
    if (!this.listaDAO) {
      throw new Error('Falha ao inicializar a propriedade listaDAO');
    }
  }

  async salvarLista(req, res) {
    let lista;
    try {
      if (!req.body) {
        return res.status(400).json({ error: 'Requisição inválida.' });
      }

      const { descricao, moedas, feito } = req.body; // Adicione essa linha para obter os valores do corpo da requisição

      if (!descricao || !moedas || !feito) {
        return res.status(400).json({ error: 'Campos inválidos.' });
      }

      lista = await this.listaDAO.salvar({ descricao, moedas, feito });

      if (lista === true) {
        return res.json({ message: 'Lista salva com sucesso.' });
      } else {
        return res.status(500).json({ error: 'Erro ao salvar lista no banco de dados.' });
      }
    } catch (error) {
      console.error('Erro ao salvar lista:', error);
      return res.status(500).json({ error: 'Erro ao salvar lista no banco de dados.' });
    }
  }
}

module.exports = { ListaController };
