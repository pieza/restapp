const Service = require('./Service')
const Registro = require("../models/registro")

module.exports = class RegistroService extends Service {
  constructor() { super(Registro) }
}