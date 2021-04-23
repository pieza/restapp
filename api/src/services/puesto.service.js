const BaseService = require('./baseService')
const Puesto = require("../models/puesto")

module.exports = class PuestoService extends BaseService {
  constructor() { super(Puesto) }

  async find(filters) {
    return await this.model.find(filters)
      .populate('rol')
  }
}