const BaseService = require('./baseService')
const Cliente = require("../models/cliente")

module.exports = class ClienteService extends BaseService {
  constructor() { super(Cliente) }
}