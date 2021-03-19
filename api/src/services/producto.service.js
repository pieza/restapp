const BaseService = require('./baseService')
const Producto = require("../models/producto")

module.exports = class ProductoService extends BaseService {
  constructor() { super(Producto) }
}