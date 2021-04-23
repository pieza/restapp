const BaseService = require('./baseService')
const Comestible = require("../models/comestible")

module.exports = class ComestibleService extends BaseService {
  constructor() { super(Comestible) }

  async find(filters) {
    return await this.model.find(filters)
      .populate('marca')
      .populate('restaurante')
  }
}