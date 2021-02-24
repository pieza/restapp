const mongoose = require('mongoose')
const { Schema } = mongoose

const PaisSchema = new Schema({
  codigo: { type: String },
  nombre: { type: String }
})

module.exports = mongoose.model('Pais', PaisSchema)