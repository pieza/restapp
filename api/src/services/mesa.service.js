const BaseService = require('./baseService')
const Mesa = require("../models/mesa")

module.exports = class MesaService extends BaseService {
  constructor() { super(Mesa) }
}