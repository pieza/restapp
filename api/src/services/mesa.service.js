const Service = require('./Service')
const Mesa = require("../models/mesa")

module.exports = class MesaService extends Service {
  constructor() { super(Mesa) }
}