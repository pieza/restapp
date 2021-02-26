const mongoose = require('mongoose')
const { Schema } = mongoose

/** @description Representacion de Puesto de Empleado */
const PuestoSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  tipo: { type: String },
  rol: { type: String }
})

module.exports = mongoose.model('Puesto', PuestoSchema)
