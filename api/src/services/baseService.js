const Service = require('./service')
const ConsecutivoService = require("./consecutivo.service")
const BitacoraService = require("./bitacora.service")

module.exports = class BaseService extends Service {
  constructor(model) { 
    super(model)
    this.consecutivoService = new ConsecutivoService()
    this.BitacoraService = new BitacoraService()
    this.modelName = model.modelName
  }

  /**
   * Creates a new object in the database.
   * 
   * @param {object} object data of the model to create.
   */
  async create(object) {
    object.codigo = await this.consecutivoService.generate(this.modelName)
    return await super.create(object)
  }
}