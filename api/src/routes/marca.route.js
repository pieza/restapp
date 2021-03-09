const Route = require('./Route')
const Service = require('../services/marca.service')

module.exports = class MarcaRoute extends Route {
  constructor() {
    super('/marcas', new Service())
  }
}