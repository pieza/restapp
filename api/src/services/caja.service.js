const BaseService = require('./baseService')
const Caja = require("../models/caja")

module.exports = class CajaService extends BaseService {
  constructor() { super(Caja) }
}
