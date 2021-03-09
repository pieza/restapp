const Service = require('./Service')
const Puesto = require("../models/puesto")

module.exports = class PuestoService extends Service {
  constructor() { super(Puesto) }
}