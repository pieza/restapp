const Route = require('./Route')
const Service = require('../services/buffet.service')

module.exports = class BuffetRoute extends Route {
  constructor() {
    super('/buffet', new Service())
  }
}