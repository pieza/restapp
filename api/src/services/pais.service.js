const Pais = require("../models/pais")
const BaseService = require('./baseService')

module.exports = class PaisService extends BaseService {
  constructor() { super(Pais) }
}