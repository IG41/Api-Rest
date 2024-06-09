const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UsuarioDAOMongo } = require('./DAO/userDAO');

class AuthController {
  async realizarLogin(req, res) {
    const { email, senha } = req.body;

    try {
      const usuarioDAOMongo = new UsuarioDAOMongo();
      const usuario = await usuarioDAOMongo.buscarUsuarioPorEmail(email);

      if (!usuario) {
        return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
      }

      const senhaCorrespondente = await bcrypt.compare(senha, usuario.senha);

      if (!senhaCorrespondente) {
        return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
      }

      const token = jwt.sign({ id: usuario._id }, 'Engenharia123', { expiresIn: '2h' });
      res.json({ token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Erro ao realizar login.' });
    }
  }
}

module.exports = new AuthController();
