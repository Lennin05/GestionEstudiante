const express = require("express");
const router = express.Router();
const Estudiante = require("../models/estudiante");

router.get("/", async (req, res) => {
  const { filtro } = req.query;
  const estudiantes = await Estudiante.find(
    filtro ? { nombre: new RegExp(filtro, "i") } : {}
  ).populate("calificaciones");
  res.json(estudiantes);
});

router.post("/", async (req, res) => {
  const estudiante = new Estudiante(req.body);
  await estudiante.save();
  res.status(201).json(estudiante);
});

router.delete("/:id", async (req, res) => {
  await Estudiante.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
