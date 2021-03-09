const Route = require('./Route')
const Service = require('../services/comestible.service')

module.exports = class ComestibleRoute extends Route {
  constructor() {
    super('/comestibles', new Service())
  }
}