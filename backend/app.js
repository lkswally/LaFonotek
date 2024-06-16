//console.log(process.env);
const express = require('express');
const app = express();

const cors = require('cors');
const db = require('./config/db'); // Conexión a la base de datos


// Seteamos urlencoded para capturar los datos del form
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Invocamos dotenv
const dotnev = require('dotenv');
dotnev.config({path:'./.env'});

// Invocamos bcryptjs
const bcryptjs =  require('bcryptjs');

// var de session



app.use(cors());

// Rutas
const discosRoutes = require('./routes/discos');
const generosRoutes = require('./routes/generos');
const usuariosRoutes = require('./routes/usuarios'); // Mantenemos usuarios para autenticación (opcional)
const authRoutes = require('./routes/auth');

app.use('/discos', discosRoutes);
app.use('/generos', generosRoutes);
app.use('/usuarios', usuariosRoutes); // Mantenemos usuarios para autenticación (opcional)
app.use('/login', authRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
