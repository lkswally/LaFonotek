const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  username: 'root',
  password: 'root',
  database: 'ventadediscos',
  host: 'localhost',
  dialect: 'mysql',
  port: 3306 
});

module.exports = sequelize;
