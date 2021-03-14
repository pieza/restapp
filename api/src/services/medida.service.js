const BaseService = require('./baseService')
const Medida = require("../models/medida")

module.exports = class MedidaService extends BaseService {
  constructor() { super(Medida) }
}