const mongoose = require("mongoose");

const asistenciaSchema = new mongoose.Schema({
  estudiante: { type: mongoose.Schema.Types.ObjectId, ref: "Estudiante" },
  fecha: { type: Date, default: Date.now },
  presente: { type: Boolean, required: true },
});

module.exports = mongoose.model("Asistencia", asistenciaSchema);
