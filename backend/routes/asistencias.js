const express = require("express");
const router = express.Router();
const Asistencia = require("../models/asistencia");

router.get("/", async (req, res) => {
  const asistencias = await Asistencia.find().populate("estudiante");
  res.json(asistencias);
});

router.post("/", async (req, res) => {
  const asistencia = new Asistencia(req.body);
  await asistencia.save();
  res.status(201).json(asistencia);
});

module.exports = router;
