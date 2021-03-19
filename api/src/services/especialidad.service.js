const BaseService = require('./baseService')
const Especialidad = require("../models/especialidad")

module.exports = class EspecialidadService extends BaseService {
  constructor() { super(Especialidad) }
}