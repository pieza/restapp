const BaseService = require('./baseService')
const Proveedor = require("../models/proveedor")

module.exports = class ProveedorService extends BaseService {
  constructor() { super(Proveedor) }

  async find(filters) {
    return await this.model.find(filters)
      .populate('restaurante')
  }
}