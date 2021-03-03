const mongoose = require('mongoose')
const { Schema } = mongoose

/**
* @description Representa unidades de Medida
*/
const MedidaSchema = new Schema({
  codigo: { type: String },
  detalle: { type: String },
  unidad_medida: { type: String },
  simbologia: { type: String }
})
module.exports = mongoose.model('Medida', MedidaSchema)
