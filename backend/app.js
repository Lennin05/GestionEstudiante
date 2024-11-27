const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a MongoDB
mongoose
  .connect("mongodb://localhost:27017/pedro_colegio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Rutas
const estudiantesRoutes = require("./routes/estudiantes");
const calificacionesRoutes = require("./routes/calificaciones");
const asistenciasRoutes = require("./routes/asistencias");

app.use("/estudiantes", estudiantesRoutes);
app.use("/calificaciones", calificacionesRoutes);
app.use("/asistencias", asistenciasRoutes);

// Ruta raíz para probar el servidor
app.get("/", (req, res) => {
  res.send("Servidor funcionando. Visita las rutas /estudiantes, /calificaciones o /asistencias.");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
