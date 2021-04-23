const BaseService = require('./baseService')
const Factura = require("../models/factura")

module.exports = class FacturaService extends BaseService {
  constructor() { super(Factura) }

  async find(filters) {
    return await this.model.find(filters)
      .populate('cliente')
  }
}