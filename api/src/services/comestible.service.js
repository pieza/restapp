const Service = require('./Service')
const Comestible = require("../models/comestible")

module.exports = class ComestibleService extends Service {
  constructor() { super(Comestible) }
}