const Service = require('./service')
const Bitacora = require("../models/bitacora")
const ConsecutivoService = require("./consecutivo.service")

module.exports = class BitacoraService extends Service {
  constructor() { 
    super(Bitacora)
    this.modelName = this.model.modelName
    this.consecutivoService = new ConsecutivoService()
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

  async log(object) {
    let fecha = new Date()
    let usuario = null

    return await this.create({
      ...object,
      fecha,
      usuario
    })
  }
}