const Service = require('./Service')
const Marca = require("../models/marca")

module.exports = class MarcaService extends Service {
  constructor() { super(Marca) }
}