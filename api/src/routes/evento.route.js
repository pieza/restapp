const Route = require('./Route')
const Service = require('../services/evento.service')

module.exports = class EventoRoute extends Route {
  constructor() {
    super('/eventos', new Service())
  }
}