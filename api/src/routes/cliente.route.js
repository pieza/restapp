const Route = require('./Route')
const Service = require('../services/cliente.service')

module.exports = class ClienteRoute extends Route {
  constructor() {
    super('/clientes', new Service())
  }
}