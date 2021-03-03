const Route = require('./Route')
const Service = require('../services/consecutivo.service')

module.exports = class ConsecutivoRoute extends Route {
  constructor() {
    super('/consecutivos', new Service())
  }
}