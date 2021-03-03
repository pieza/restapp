const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
* @description Representacion de un Rol
* Ejemplo: { codigo: ROL-01, nombre: Lavar platos }
* */
const RolSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
  descripcion: { type: String },
});

module.exports = mongoose.model('Rol', RolSchema);
