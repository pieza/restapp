const BaseService = require('./baseService')
const Mesa = require("../models/mesa")

module.exports = class MesaService extends BaseService {
  constructor() { super(Mesa) }

  async find(filters) {
    return await this.model.find(filters)
      .populate('restaurante')
  }
}