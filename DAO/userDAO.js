const { UsuarioModel } = require('../models/Usuario');
const { Usuario } = require('../models/Usuario');

class UsuarioDAOMongo {
  async buscarUsuarioPorEmail(email) {
    try {
      const usuario = await UsuarioModel.findOne({ email });
      return usuario;
    } catch (err) {
      throw new Error('Erro ao buscar usuário por e-mail no banco de dados.');
    }
  }

  async salvar(usuario) {
    try {
      const novoUsuario = new UsuarioModel(usuario);
      await novoUsuario.save();
      return true;
    } catch (err) {
      console.error('Erro ao salvar usuário:', err);
      return false;
    }
  }

}

module.exports = { UsuarioDAOMongo };
