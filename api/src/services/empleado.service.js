const BaseService = require('./baseService')
const Empleado = require("../models/empleado")

module.exports = class EmpleadoService extends BaseService {
  constructor() { super(Empleado) }

  async find(filters) {
    return await this.model.find(filters)
      .populate('puesto')
      .populate('restaurante')
      .populate('nacionalidad')
  }
}