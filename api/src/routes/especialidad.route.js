const Route = require('./Route')
const Service = require('../services/especialidad.service')

module.exports = class EspecialidadRoute extends Route {
  constructor() {
    super('/especialidades', new Service())
  }
}