const mongoose = require('mongoose')
const { Schema } = mongoose

/** @description Representacion de un Buffet de un Restaurante */
const BuffetSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  tipo: { type: String },
  medida: { type: moongose.ObjectId },
  precio: { type: Number },
  imagen: { type: String },
})

module.exports = mongoose.model('Buffet', BuffetSchema)
