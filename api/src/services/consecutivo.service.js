const Service = require('./Service')
const Consecutivo = require("../models/consecutivo")

module.exports = class ConsecutivoService extends Service {
  constructor() { super(Consecutivo) }
}