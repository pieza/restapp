const BaseService = require('./baseService')
const Registro = require("../models/registro")

module.exports = class RegistroService extends BaseService {
  constructor() { super(Registro) }
}