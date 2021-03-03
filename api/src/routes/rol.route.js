const Route = require('./Route')
const Service = require('../services/rol.service')

module.exports = class RolRoute extends Route {
  constructor() {
    super('/roles', new Service())
  }
}