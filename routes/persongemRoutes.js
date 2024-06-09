const express = require('express');
const personagemController = require('../personagemController');

const router = express.Router();

router.post('/', (req, res) => {
  const { comprometimento, sociabilidade, inteligencia, saude, forca } = req.body;
  const personagem = { comprometimento, sociabilidade, inteligencia, saude, forca };

  const resultado = personagemController.salvar(personagem);

  if (resultado) {
    res.json({ message: 'Personagem salvo com sucesso.' });
  } else {
    res.status(500).json({ error: 'Erro ao salvar personagem no banco de dados.' });
  }
});

module.exports = router;
