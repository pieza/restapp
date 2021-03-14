const BaseService = require('./baseService')
const Puesto = require("../models/puesto")

module.exports = class PuestoService extends BaseService {
  constructor() { super(Puesto) }
}