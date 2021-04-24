const Service = require('./Service')
const Bitacora = require("../models/bitacora")
const ConsecutivoService = require("./consecutivo.service")

module.exports = class BitacoraService extends Service {
  constructor() { 
    super(Bitacora)
    this.modelName = this.model.modelName
    this.consecutivoService = new ConsecutivoService()
  }

  async find(filters) {
    return await this.model.find(filters)
      .populate('usuario')
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

  async log(tipo, descripcion, detalle, usuario) {
    let fecha = new Date()

    return await this.create({
      tipo,
      descripcion,
      detalle,
      fecha,
      usuario
    })
  }
}
