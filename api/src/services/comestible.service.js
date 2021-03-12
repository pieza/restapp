const BaseService = require('./baseService')
const Comestible = require("../models/comestible")

module.exports = class ComestibleService extends BaseService {
  constructor() { super(Comestible) }
}