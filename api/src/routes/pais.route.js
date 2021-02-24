const Route = require('./Route')
const Service = require('../services/pais.service')

module.exports = class PaisRoute extends Route {
  constructor() {
    super('/paises', new Service())
  }
}