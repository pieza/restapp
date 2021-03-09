const Service = require('./Service')
const Restaurante = require("../models/restaurante")

module.exports = class RestauranteService extends Service {
  constructor() { super(Restaurante) }
}