require('dotenv').config();
const { Sequelize } = require('sequelize'); // Importar Sequelize constructor

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT // Agrega esta línea si tu puerto es diferente de 3306
});

// Prueba la conexión
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos MySQL!');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();

module.exports = sequelize; // Exportar la instancia de Sequelize
