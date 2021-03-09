const Service = require('./Service')
const Medida = require("../models/medida")

module.exports = class MedidaService extends Service {
  constructor() { super(Medida) }
}