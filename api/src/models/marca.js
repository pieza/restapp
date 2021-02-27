const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

/** @description Representacion de un Marca de un Restaurante */
const MarcaSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  descripcion: { type: String },
  nacionalidad: { type: ObjectId, ref: 'Pais' },
  empresa: { type: String },
  telefono: { type: String },
});

module.exports = mongoose.model('Marca', MarcaSchema);
