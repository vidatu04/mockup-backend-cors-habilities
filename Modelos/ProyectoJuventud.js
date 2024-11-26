const mongoose = require('mongoose');

const ProyectoJuventudSchema = new mongoose.Schema({

  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  gastos: {
    type: Date,
    required: true
  },
  fechaInicio: {
    type: Date,
    required: true
  },
  fechaFin: {
    type: Date,
    required: true
  },
  metaProductoInicial: {
    type: Number,
    required: true
  },
  metaProductoFinal: {
    type: Number,
    required: true
  },
  presupuesto: {
    type: Number,
    required: true
  },
  entidad: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ProyectoJuventud', ProyectoJuventudSchema);
