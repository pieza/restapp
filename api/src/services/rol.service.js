const BaseService = require('./baseService')
const Rol = require("../models/rol")

module.exports = class RolService extends BaseService {
  constructor() { super(Rol) }
}