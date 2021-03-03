const Service = require('./Service')
const Empleado = require("../models/empleado")

module.exports = class EmpleadoService extends Service {
  constructor() { super(Empleado) }
}