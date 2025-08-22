import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Endpoint de prueba
app.get("/", (req, res) => {
  res.send("✅ API ESP32 funcionando!");
});

// Endpoint para recibir datos del ESP32
app.post("/api/esp32", (req, res) => {
  const { chip_id, user_id } = req.body;

  if (!chip_id || !user_id) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  console.log("📡 Nuevo dispositivo:");
  console.log("Chip ID:", chip_id);
  console.log("User ID:", user_id);

  // 🔹 Aquí luego podemos guardar en Firebase o MongoDB

  res.json({ success: true, message: "Datos recibidos correctamente" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
