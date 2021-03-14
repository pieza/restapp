const BaseService = require('./baseService')
const Usuario = require("../models/usuario")

module.exports = class UsuarioService extends BaseService {
  constructor() { super(Usuario) }
}