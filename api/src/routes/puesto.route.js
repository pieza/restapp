const Route = require('./Route')
const Service = require('../services/puesto.service')

module.exports = class PuestoRoute extends Route {
  constructor() {
    super('/puestos', new Service())
  }
}