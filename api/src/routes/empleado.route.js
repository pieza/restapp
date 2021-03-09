const Route = require('./Route')
const Service = require('../services/empleado.service')

module.exports = class EmpleadoRoute extends Route {
  constructor() {
    super('/empleados', new Service())
  }
}