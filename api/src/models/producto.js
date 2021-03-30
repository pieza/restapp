const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Producto de un Restaurante */
const ProductoSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  descripcion: { type: String },
  cantidad: { type: String },
  marca: { type: ObjectId, ref: 'Marca' },
  restaurante: { type: ObjectId, ref: 'Restaurante' },
  es_liquido: { type: Boolean },
  medida: { type: ObjectId, ref: 'Medida' },
  precio: { type: Number },
});

module.exports = mongoose.model('Producto', ProductoSchema);
