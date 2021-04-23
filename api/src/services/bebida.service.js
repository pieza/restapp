const BaseService = require('./baseService')
const Bebida = require("../models/bebida")

module.exports = class BebidaService extends BaseService {
  constructor() { super(Bebida) }

  async find(filters) {
    return await this.model.find(filters)
      .populate('marca')
      .populate('restaurante')
      .populate('nacionalidad')
  }
}