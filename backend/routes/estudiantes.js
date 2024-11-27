const express = require("express");
const router = express.Router();
const estudiantesController = require("../controllers/estudiantesController");

router.get("/", estudiantesController.getEstudiantes);
router.post("/", estudiantesController.createEstudiante);
router.put("/:id", estudiantesController.updateEstudiante);
router.delete("/:id", estudiantesController.deleteEstudiante);

module.exports = router;
