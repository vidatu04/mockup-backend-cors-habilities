const { createProyectoJuventud, getProyectoJuventudById, editProyectoJuventud, deleteProyectoJuventud, getAllProyectoJuventud } = require('../Controladores/ProyectoJuventudControlador');


const create = async (req, res) => {
  try {
    const { nombre, descripcion, gastos, fechaInicio, fechaFin, metaProductoInicial, metaProductoFinal, presupuesto, entidad } = req.body;
    const newProyectoJuventud = await createProyectoJuventud(nombre, descripcion, gastos, fechaInicio, fechaFin, metaProductoInicial, metaProductoFinal, presupuesto, entidad);
    return res.status(200).json({
      message: "ProyectoJuventud ha sido creado",
      ProyectoJuventud: newProyectoJuventud
    });
  } catch (error) {
    return res.status(400).json({ message: 'Error al crear el proyecto de juventud', error: error.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params; // Capturamos el ID dinámico de la URL
  try {
    const data = await getProyectoJuventudById(id);
    return res.status(200).json({
      message: "ProyectoJuventud ha sido encontrado",
      ProyectoJuventud: data
    });
  } catch (error) {
    console.error('Error al buscar proyecto:', error);
    res.status(500).json({
      message: 'Error al recuperar el proyecto de juventud',
      error: error.message,
    });
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;

  try {
    const data = await editProyectoJuventud(id, datosActualizados);
    return res.status(200).json({
      message: "ProyectoJuventud ha sido actualizado",
      ProyectoJuventud: data
    });
  } catch (error) {
    return res.status(400).json({ message: 'Error al actualizar el proyecto de juventud', error: error.message });
  }
};


const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteProyectoJuventud(id);
    return res.status(200).json({
      message: "ProyectoJuventud ha sido eliminado",
      ProyectoJuventud: data
    });
  } catch (error) {
    return res.status(400).json({ message: 'Error al eliminar el proyecto de juventud', error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const proyectos = await getAllProyectoJuventud();
    return res.status(200).json({
      message: "Proyectos de juventud recuperados",
      Proyectos: proyectos
    });
  } catch (error) {
    console.error('Error al recuperar los proyectos de juventud:', error.message);
    return res.status(500).json({
      message: "Error al recuperar los proyectos de juventud",
      error: error.message
    });
  }
};


module.exports = {
  create,
  getById,
  edit,
  remove,
  getAll
};
