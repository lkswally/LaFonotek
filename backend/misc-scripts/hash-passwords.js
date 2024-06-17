require('dotenv').config({
    path: '../.env'
}); // Cargar variables de entorno desde .env

const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize'); // Importa Sequelize y DataTypes

// Configuración de la base de datos desde las variables de entorno
const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
  },
};

const sequelize = new Sequelize(config.development);

// Definición del modelo Usuario (similar a como lo tienes en models/usuario.js)
const Usuario = sequelize.define('Usuario', {
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true 
  },
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  email: DataTypes.STRING,
  contrasena: DataTypes.STRING,
}, {
  timestamps: false
});


(async () => {
  try {
    await sequelize.authenticate(); // Prueba la conexión antes de hashear

    const usuarios = await Usuario.findAll();
    const saltRounds = 10; // Ajusta según tus necesidades

    for (const usuario of usuarios) {
      usuario.contrasena = await bcrypt.hash(usuario.contrasena, saltRounds);
      await usuario.save();
    }

    console.log('Contraseñas hasheadas correctamente.');
  } catch (error) {
    console.error('Error al hashear contraseñas:', error);
  } finally {
    await sequelize.close(); // Cierra la conexión al finalizar
  }
})();
