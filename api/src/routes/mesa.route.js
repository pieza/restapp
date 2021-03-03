const Route = require('./Route')
const Service = require('../services/mesa.service')

module.exports = class MesaRoute extends Route {
  constructor() {
    super('/mesas', new Service())
  }
}