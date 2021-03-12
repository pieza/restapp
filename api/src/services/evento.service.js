const BaseService = require('./baseService')
const Evento = require("../models/evento")

module.exports = class EventoService extends BaseService {
  constructor() { super(Evento) }
}