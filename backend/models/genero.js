const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Genero = sequelize.define('Genero', {
  idCategoria: { // Usamos idCategoria para mantener consistencia con el esquema original
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Genero;
