const Estudiante = require("../models/estudiante");

// Obtener todos los estudiantes con filtro opcional
exports.getEstudiantes = async (req, res) => {
  try {
    const { filtro } = req.query;
    const estudiantes = await Estudiante.find(
      filtro ? { nombre: new RegExp(filtro, "i") } : {}
    ).populate("calificaciones");
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los estudiantes" });
  }
};

// Crear un estudiante
exports.createEstudiante = async (req, res) => {
  try {
    const estudiante = new Estudiante(req.body);
    await estudiante.save();
    res.status(201).json(estudiante);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el estudiante" });
  }
};

// Actualizar un estudiante
exports.updateEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
    const estudiante = await Estudiante.findByIdAndUpdate(id, req.body, { new: true });
    if (!estudiante) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }
    res.json(estudiante);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el estudiante" });
  }
};

// Eliminar un estudiante
exports.deleteEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
    const estudiante = await Estudiante.findByIdAndDelete(id);
    if (!estudiante) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el estudiante" });
  }
};
