const Route = require('./Route')
const Service = require('../services/bebida.service')

module.exports = class BebidaRoute extends Route {
  constructor() {
    super('/bebidas', new Service())
  }
}