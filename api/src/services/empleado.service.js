const BaseService = require('./baseService')
const Empleado = require("../models/empleado")

module.exports = class EmpleadoService extends BaseService {
  constructor() { super(Empleado) }
}