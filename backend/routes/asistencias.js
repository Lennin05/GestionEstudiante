const express = require("express");
const router = express.Router();
const asistenciasController = require("../controllers/asistenciasController");

router.post("/", asistenciasController.registrarAsistencia);
router.get("/", asistenciasController.getHistorialAsistencias);

module.exports = router;
