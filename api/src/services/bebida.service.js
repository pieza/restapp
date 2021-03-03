const Service = require('./Service')
const Bebida = require("../models/bebida")

module.exports = class BebidaService extends Service {
  constructor() { super(Bebida) }
}