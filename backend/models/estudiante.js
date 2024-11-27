const mongoose = require("mongoose");

const estudianteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  calificaciones: [{ type: mongoose.Schema.Types.ObjectId, ref: "Calificacion" }],
});

module.exports = mongoose.model("Estudiante", estudianteSchema);
