const BaseService = require('./baseService')
const Producto = require("../models/producto")

module.exports = class ProductoService extends BaseService {
  constructor() { super(Producto) }

  async find(filters) {
    return await this.model.find(filters)
      .populate('marca')
      .populate('restaurante')
      .populate('medida')
  }
}