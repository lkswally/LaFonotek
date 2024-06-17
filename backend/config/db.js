require('dotenv').config(); // variables de entorno desde .env

const { Sequelize } = require('sequelize');

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
  // diferentes configuraciones (ej producción)
};

const sequelize = new Sequelize(config.development);

// Prueba de conexión
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente!');

    // Sincroniza los modelos
    await sequelize.sync({ alter: true }); 
    console.log('Tablas sincronizadas con la base de datos.');

  } catch (error) {
    console.error('No se puede conectar a la base de datos:', error);
  }
})();

module.exports = {
  sequelize, // instancia de Sequelize
  config,    // objeto de configuración
};
