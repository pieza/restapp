const Service = require('./Service')
const Factura = require("../models/factura")

module.exports = class FacturaService extends Service {
  constructor() { super(Factura) }
}