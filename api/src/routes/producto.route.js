const Route = require('./Route')
const Service = require('../services/producto.service')

module.exports = class ProductoRoute extends Route {
  constructor() {
    super('/productos', new Service())
  }
}