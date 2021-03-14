const BaseService = require('./baseService')
const Marca = require("../models/marca")

module.exports = class MarcaService extends BaseService {
  constructor() { super(Marca) }
}