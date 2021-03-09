const Service = require('./Service')
const Evento = require("../models/evento")

module.exports = class EventoService extends Service {
  constructor() { super(Evento) }
}