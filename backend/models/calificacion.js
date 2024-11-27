const mongoose = require("mongoose");

const calificacionSchema = new mongoose.Schema({
  estudiante: { type: mongoose.Schema.Types.ObjectId, ref: "Estudiante" },
  materia: { type: String, required: true },
  nota: { type: Number, required: true },
});

calificacionSchema.virtual("literal").get(function () {
  if (this.nota >= 90) return "A";
  if (this.nota >= 80) return "B";
  if (this.nota >= 70) return "C";
  return "F";
});

module.exports = mongoose.model("Calificacion", calificacionSchema);
