const Tarea = require('../models/Tarea');

const obtenerTodas = async (req, res, next) => {
  try {
    const tareas = await Tarea.find({});
    res.status(200).json(tareas);
  } catch (err) {
    next(err);
  }
};

const obtenerPorId = async (req, res, next) => {
  try {
    const tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      res.status(404).json({ message: "Tarea no encontrada" });
    } else {
      res.status(200).json(tarea);
    }
  } catch (err) {
    next(err);
  }
};

const crearTarea = async (req, res, next) => {
  try {
    const { nombre, fechaLimite, estado, tareaPadre } = req.body;
    const nuevaTarea = new Tareas({
      nombre,
      fechaLimite: fechaLimiteDate,
      estado: estado || 'creada',
      tareaPadre
    });
    const tareaGuardada = await nuevaTarea.save();
    res.status(201).json(tareaGuardada);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const actualizarTarea = async (req, res, next) => {
  try {
    const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tareaActualizada) {
      res.status(404).json({ message: "Tarea no encontrada" });
    } else {
      res.status(200).json(tareaActualizada);
    }
  } catch (err) {
    next(err);
  }
};

const eliminarTarea = async (req, res, next) => {
  try {
    const tareaEliminada = await Tarea.findByIdAndDelete(req.params.id);
    if (!tareaEliminada) {
      res.status(404).json({ message: "Tarea no encontrada" });
    } else {
      res.status(200).json({ message: "Tarea eliminada exitosamente" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  obtenerTodas,
  obtenerPorId,
  crearTarea,
  actualizarTarea,
  eliminarTarea
};
