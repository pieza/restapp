const BaseService = require('./baseService')
const Bitacora = require("../models/bitacora")

module.exports = class BitacoraService extends BaseService {
  constructor() { super(Bitacora) }
}