require('dotenv').config();
//console.log(process.env);
const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // Asegúrate de tener la conexión a la base de datos

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
const discosRoutes = require('./routes/discos');
const generosRoutes = require('./routes/generos');
const usuariosRoutes = require('./routes/usuarios'); // Mantenemos usuarios para autenticación (opcional)

app.use('/discos', discosRoutes);
app.use('/generos', generosRoutes);
app.use('/usuarios', usuariosRoutes); // Mantenemos usuarios para autenticación (opcional)

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
