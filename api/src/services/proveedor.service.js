const Service = require('./Service')
const Proveedor = require("../models/proveedor")

module.exports = class ProveedorService extends Service {
  constructor() { super(Proveedor) }
}