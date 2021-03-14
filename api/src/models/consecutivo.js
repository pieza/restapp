const mongoose = require('mongoose');

const { Schema } = mongoose;

/** @description Representacion de un Consecutivo de un Restaurante */
const ConsecutivoSchema = new Schema({
  descripcion: { type: String },
  consecutivo: { type: Number },
  posee_prefijo: { type: Boolean, default: false },
  prefijo: { type: String },
});

module.exports = mongoose.model('Consecutivo', ConsecutivoSchema);
