const Service = require('./service')
const Consecutivo = require("../models/consecutivo")

module.exports = class ConsecutivoService extends Service {
  constructor() { super(Consecutivo) }

  /**
   * Generates a unique code for a model based on the settins.
   * 
   * @param {string} modelName name of the mongo model.
   * @returns generated code.
   */
  async generate(modelName) {
    console.log(modelName)
    let codigo = ''
    let consecutivo = await super.find({ descripcion: modelName })

    if(!consecutivo) return codigo 

    consecutivo.consecutivo++

    if(consecutivo.posee_prefijo) {
      codigo = `${consecutivo.prefijo}-${consecutivo.consecutivo}`
    } else {
      codigo = consecutivo.consecutivo
    }
    
    return codigo
  }
}