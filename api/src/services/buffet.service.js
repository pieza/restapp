const Service = require('./Service')
const Buffet = require("../models/buffet")

module.exports = class BuffetService extends Service {
  constructor() { super(Buffet) }
}