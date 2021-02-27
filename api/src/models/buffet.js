const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Buffet de un Restaurante */
const BuffetSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  tipo: { type: String },
  medida: { type: ObjectId, ref: 'Medida' },
  precio: { type: Number },
  imagen: { type: String },
});

module.exports = mongoose.model('Buffet', BuffetSchema);
