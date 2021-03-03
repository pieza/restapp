const Service = require('./Service')
const Cliente = require("../models/cliente")

module.exports = class ClienteService extends Service {
  constructor() { super(Cliente) }
}