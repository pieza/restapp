const Route = require('./Route')
const Service = require('../services/usuario.service')

module.exports = class UsuarioRoute extends Route {
  constructor() {
    super('/usuarios', new Service())
  }
}