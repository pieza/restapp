const Route = require('./Route')
const Service = require('../services/factura.service')

module.exports = class FacturaRoute extends Route {
  constructor() {
    super('/facturas', new Service())
  }
}