const Service = require('./Service')
const Pais = require("../models/pais")

module.exports = class PaisService extends Service {
  constructor() { super(Pais) }

  // Ejemplo de que se puede hacer overwrite
  // TODO: Delete
  async find(filters) {
    return [1,2,3]
  }
}