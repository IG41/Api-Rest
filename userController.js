const bcrypt = require('bcrypt');
const { UsuarioDAOMongo } = require('./DAO/userDAO');

class UserController {
  constructor() {
    this.usuarioController = new UsuarioDAOMongo();
    this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
  }

  async cadastrarUsuario(req, res) {
    const { nome, email, senha } = req.body;

    try {
      const usuarioExistente = await this.usuarioController.buscarUsuarioPorEmail(email);
      if (usuarioExistente) {
        return res.status(400).json({ error: 'O e-mail já está cadastrado.' });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(senha, saltRounds);

      const novoUsuario = {
        nome,
        email,
        senha: hashedPassword,
      };

      const resultado = await this.usuarioController.salvar(novoUsuario);

      if (resultado) {
        res.json({ message: 'Usuário cadastrado com sucesso.' });
      } else {
        res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
      }
    } catch (err) {
      console.log(err);
      res.status(408).json({ error: 'Erro ao acessar usuário.' });
    }
  }
}

module.exports = new UserController();
