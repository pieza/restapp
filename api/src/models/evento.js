const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
* @description Representacion de un Evento
* Ejemplo: { codigo: EVE-01, nombre: Creacion de usuario X }
* */
const EventoSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String },
});

module.exports = mongoose.model('Evento', EventoSchema);
