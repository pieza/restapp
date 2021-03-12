const BaseService = require('./baseService')
const Bebida = require("../models/bebida")

module.exports = class BebidaService extends BaseService {
  constructor() { super(Bebida) }
}