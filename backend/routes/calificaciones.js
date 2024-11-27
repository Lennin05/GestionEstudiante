const express = require("express");
const router = express.Router();
const calificacionesController = require("../controllers/calificacionesController");

router.post("/", calificacionesController.asignarCalificacion);
router.get("/:estudianteId", calificacionesController.getCalificacionesPorEstudiante);

module.exports = router;
