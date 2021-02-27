const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
* @description PaisSchema. Tiene codigo y nombre
* Ejemplo: { codigo: PAI-01, nombre: Portugal }
* */
const PaisSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
});

module.exports = mongoose.model('Pais', PaisSchema);
