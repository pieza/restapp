const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Mesa de un Restaurante */
const MesaSchema = new Schema({
  codigo: { type: String },
  sillas: { type: Number },
  restaurante: { type: ObjectId, ref: 'Restaurante' },
  estado: { type: String },
  numero: { type: Number },
});

module.exports = mongoose.model('Mesa', MesaSchema);
