const BaseService = require('./baseService')
const Marca = require("../models/marca")

module.exports = class MarcaService extends BaseService {
  constructor() { super(Marca) }

  async find(filters) {
    return await this.model.find(filters)
      .populate('nacionalidad')
  }
}