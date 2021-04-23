const BaseService = require('./baseService')
const Registro = require("../models/registro")

module.exports = class RegistroService extends BaseService {
  constructor() { super(Registro) }

  async find(filters) {
    return await this.model.find(filters)
      .populate('restaurante')
  }
}