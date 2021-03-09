const Service = require('./Service')
const Rol = require("../models/rol")

module.exports = class RolService extends Service {
  constructor() { super(Rol) }
}