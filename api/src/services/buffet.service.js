const BaseService = require('./baseService')
const Buffet = require("../models/buffet")

module.exports = class BuffetService extends BaseService {
  constructor() { super(Buffet) }

  async find(filters) {
    return await this.model.find(filters)
      .populate('medida')
  }
}