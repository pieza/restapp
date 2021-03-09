const Service = require('./Service')
const Especialidad = require("../models/especialidad")

module.exports = class EspecialidadService extends Service {
  constructor() { super(Especialidad) }
}