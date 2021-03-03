const Service = require('./Service')
const Usuario = require("../models/usuario")

module.exports = class UsuarioService extends Service {
  constructor() { super(Usuario) }
}