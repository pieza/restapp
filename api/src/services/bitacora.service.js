const Service = require('./Service')
const Bitacora = require("../models/bitacora")

module.exports = class BitacoraService extends Service {
  constructor() { super(Bitacora) }
}