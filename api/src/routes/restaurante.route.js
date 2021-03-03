const Route = require('./Route')
const Service = require('../services/restaurante.service')

module.exports = class RestauranteRoute extends Route {
  constructor() {
    super('/restaurantes', new Service())
  }
}