const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Bebida de un Restaurante */
const BebidaSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  descripcion: { type: String },
  ingredientes: { type: String },
  marca: { type: ObjectId, ref: 'Marca' },
  restaurante: { type: ObjectId, ref: 'Restaurante' },
  nacionalidad: { type: ObjectId, ref: 'Pais' },
  tipo: { type: String },
  precio_unitario: { type: Number },
  precio_botella: { type: Number },
});

module.exports = mongoose.model('Bebida', BebidaSchema);
