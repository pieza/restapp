const Route = require('./Route')
const Service = require('../services/proveedor.service')

module.exports = class ProveedorRoute extends Route {
  constructor() {
    super('/proveedores', new Service())
  }
}