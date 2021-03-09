const Route = require('./Route')
const Service = require('../services/bitacora.service')

module.exports = class BitacoraRoute extends Route {
  constructor() {
    super('/bitacora', new Service())
  }
}