const express = require("express");
const router = express.Router();
const Calificacion = require("../models/calificacion");

router.post("/", async (req, res) => {
  const calificacion = new Calificacion(req.body);
  await calificacion.save();
  res.status(201).json(calificacion);
});

module.exports = router;
