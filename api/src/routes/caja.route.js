const Route = require('./Route')
const Service = require('../services/caja.service')

module.exports = class CajaRoute extends Route {
  constructor() {
    super('/cajas', new Service())
  }
}
