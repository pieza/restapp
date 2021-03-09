const Service = require('./Service')
const Pais = require("../models/pais")

module.exports = class PaisService extends Service {
  constructor() { super(Pais) }
}