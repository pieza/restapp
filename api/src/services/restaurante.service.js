const BaseService = require('./baseService')
const Restaurante = require("../models/restaurante")

module.exports = class RestauranteService extends BaseService {
  constructor() { super(Restaurante) }
}