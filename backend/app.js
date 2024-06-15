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
const usuariosRoutes = require('./routes/usuarios');
const carritosRoutes = require('./routes/carritos');
const comprasRoutes = require('./routes/compras');

app.use('/api/discos', discosRoutes);
app.use('/api/generos', generosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/carritos', carritosRoutes);
app.use('/api/compras', comprasRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
