const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./db/db');
const userController = require('./userController');
const authController = require('./authController');
const { ListaController } = require('./listaController');
const { PersonagemController } = require('./personagemController');

const app = express();
app.use(bodyParser.json());

connectToDatabase();

const listaController = new ListaController();
const personagemController = new PersonagemController();

app.post('/usuarios', userController.cadastrarUsuario);
app.post('/login', authController.realizarLogin);
app.post('/lista', listaController.salvarLista.bind(listaController));
app.put('/personagem', personagemController.salvarPersonagem.bind(personagemController));


const PORT = 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));