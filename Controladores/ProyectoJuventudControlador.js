const ProyectoJuventud = require('../Modelos/ProyectoJuventud.js');

const createProyectoJuventud = async (nombre, descripcion, gastos, fechaInicio, fechaFin, metaProductoInicial, metaProductoFinal, presupuesto, entidad) => {
  const newProyectoJuventud = await ProyectoJuventud.create({
    nombre,
    descripcion,
    gastos,
    fechaInicio,
    fechaFin,
    metaProductoInicial,
    metaProductoFinal,
    presupuesto,
    entidad
  });
  return {
    id: newProyectoJuventud._id,
    nombre: newProyectoJuventud.nombre,
    descripcion: newProyectoJuventud.descripcion,
    gastos: newProyectoJuventud.gastos,
    fechaInicio: newProyectoJuventud.fechaInicio,
    fechaFin: newProyectoJuventud.fechaFin,
    metaProductoInicial: newProyectoJuventud.metaProductoInicial,
    metaProductoFinal: newProyectoJuventud.metaProductoFinal,
    presupuesto: newProyectoJuventud.presupuesto,
    entidad: newProyectoJuventud.entidad
  };
};

const getProyectoJuventudById = async (id) => {
  const data = await ProyectoJuventud.findById(id);
  return data;
};

const editProyectoJuventud = async (id, datosActualizados) => {
  const data = await ProyectoJuventud.findByIdAndUpdate(id, datosActualizados, { new: true });
  return data;
};


const deleteProyectoJuventud = async (id) => {
  const data = await ProyectoJuventud.findByIdAndDelete(id);
  return data;
};


const getAllProyectoJuventud = async () => {
  try {
    const proyectos = await ProyectoJuventud.find();
    return proyectos;
  } catch (error) {
    console.error('Error al recuperar los proyectos:', error.message);
    throw new Error('No se pudieron recuperar los proyectos de juventud');
  }
};


module.exports = {
  createProyectoJuventud,
  getProyectoJuventudById,
  editProyectoJuventud,
  deleteProyectoJuventud,
  getAllProyectoJuventud
};
