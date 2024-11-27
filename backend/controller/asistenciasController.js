const Asistencia = require("../models/asistencia");
const Estudiante = require("../models/estudiante");

// Registrar asistencia para un estudiante
exports.registrarAsistencia = async (req, res) => {
  try {
    const { estudianteId, presente } = req.body;

    // Validar estudiante
    const estudiante = await Estudiante.findById(estudianteId);
    if (!estudiante) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    // Crear asistencia
    const asistencia = new Asistencia({ estudiante: estudianteId, presente });
    await asistencia.save();

    res.status(201).json(asistencia);
  } catch (error) {
    res.status(400).json({ error: "Error al registrar la asistencia" });
  }
};

// Obtener historial de asistencias
exports.getHistorialAsistencias = async (req, res) => {
  try {
    const asistencias = await Asistencia.find().populate("estudiante");
    res.json(asistencias);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el historial de asistencias" });
  }
};
