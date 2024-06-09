const express = require('express');
const listaController = require('../listaController');

const router = express.Router();

router.post('/', (req, res) => {
  const { descricao, moedas, feito } = req.body;
  const lista = { descricao, moedas, feito };

  const resultado = listaController.salvar(lista);

  if (resultado) {
    res.json({ message: 'Lista salva com sucesso.' });
  } else {
    res.status(500).json({ error: 'Erro ao salvar lista no banco de dados.' });
  }
});

module.exports = router;
