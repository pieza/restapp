const BaseService = require('./baseService')
const Proveedor = require("../models/proveedor")

module.exports = class ProveedorService extends BaseService {
  constructor() { super(Proveedor) }
}