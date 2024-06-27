//console.log(process.env);
const express = require('express');
const app = express();

const cors = require('cors');
const authMiddleware = require('./middlewares/authMiddleware');

// Seteamos urlencoded para capturar los datos del form
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Invocamos dotenv
const dotnev = require('dotenv');
dotnev.config({path:'./.env'});

// Invocamos bcrypt
const bcrypt =  require('bcrypt');

// Seteamos cors
app.use(cors({
  origin: 'http://localhost:8080', // frontend
  credentials: true // Esto permite cookies de sesión!
}));

// var de session
const session = require('express-session');
app.use(session({
  secret: '32332DFSDfsvczxcasdfwerqwerfssdF"#$"sdfgfgsdfgsdg',
  resave: true,
  saveUninitialized: true,
}))

// Invocamos al módulo de conexión
const connection = require('./config/db'); // Conexión a la base de datos

// Rutas
const discosRoutes = require('./routes/discos');
const generosRoutes = require('./routes/generos');
const usuariosRoutes = require('./routes/usuarios');
const membresiaRoutes = require('./routes/membresias');
const authRoutes = require('./routes/auth');

app.use('/discos', discosRoutes);
app.use('/generos', generosRoutes);
app.use('/usuarios', usuariosRoutes); // Mantenemos usuarios para autenticación (opcional)
app.use('/membresias', membresiaRoutes);
app.use('/', authRoutes);
app.use('/uploads', express.static('uploads'));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
