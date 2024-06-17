//console.log(process.env);
const express = require('express');
const app = express();

const cors = require('cors');


// Seteamos urlencoded para capturar los datos del form
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Invocamos dotenv
const dotnev = require('dotenv');
dotnev.config({path:'./.env'});

// Invocamos bcrypt
const bcrypt =  require('bcrypt');

// var de session
const session = require('express-session');
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

// Invocamos al módulo de conexión
const connection = require('./config/db'); // Conexión a la base de datos


app.use(cors({
  origin: 'http://localhost:8080', // frontend
  credentials: true
}));

// Rutas
const discosRoutes = require('./routes/discos');
const generosRoutes = require('./routes/generos');
const usuariosRoutes = require('./routes/usuarios');
const authRoutes = require('./routes/auth');

app.use('/discos', discosRoutes);
app.use('/generos', generosRoutes);
app.use('/usuarios', usuariosRoutes); // Mantenemos usuarios para autenticación (opcional)
app.use('/', authRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
