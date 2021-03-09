const Route = require('./Route')
const Service = require('../services/medida.service')

module.exports = class MedidaRoute extends Route {
  constructor() {
    super('/medidas', new Service())
  }
}