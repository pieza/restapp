const Service = require('./Service')
const Producto = require("../models/producto")

module.exports = class ProductoService extends Service {
  constructor() { super(Producto) }
}