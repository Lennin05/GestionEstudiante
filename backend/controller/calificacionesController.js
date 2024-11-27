const Calificacion = require("../models/calificacion");
const Estudiante = require("../models/estudiante");

// Asignar una calificación a un estudiante
exports.asignarCalificacion = async (req, res) => {
  try {
    const { estudianteId, materia, nota } = req.body;

    // Validar estudiante
    const estudiante = await Estudiante.findById(estudianteId);
    if (!estudiante) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    // Crear calificación
    const calificacion = new Calificacion({ estudiante: estudianteId, materia, nota });
    await calificacion.save();

    // Asignar la calificación al estudiante
    estudiante.calificaciones.push(calificacion._id);
    await estudiante.save();

    res.status(201).json(calificacion);
  } catch (error) {
    res.status(400).json({ error: "Error al asignar la calificación" });
  }
};

// Obtener calificaciones de un estudiante
exports.getCalificacionesPorEstudiante = async (req, res) => {
  try {
    const { estudianteId } = req.params;

    // Buscar calificaciones del estudiante
    const calificaciones = await Calificacion.find({ estudiante: estudianteId });
    res.json(calificaciones);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las calificaciones" });
  }
};
