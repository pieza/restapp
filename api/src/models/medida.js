const mongoose = require('mongoose')
const { Schema } = mongoose

/**
* @description Representa unidades de Medida
* Ejemplo: { codigo: PAI-01, nombre: Portugal }
*/
const MedidaSchema = new Schema({
  codigo: { type: String },
  detalle: { type: String },
  unidad_medida: { type: String },
  simbologia: { type: String }
})
module.exports = mongoose.model('Medida', MedidaSchema)
