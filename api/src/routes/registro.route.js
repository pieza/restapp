const Route = require('./Route')
const Service = require('../services/registro.service')

module.exports = class RegistroRoute extends Route {
  constructor() {
    super('/registros', new Service())
  }
}