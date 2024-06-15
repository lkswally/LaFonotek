const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Membresia = require('./membresia');

const Usuario = sequelize.define('Usuario', {
  idUsuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Definir relación con Membresia (opcional si no se usa)
Usuario.belongsTo(Membresia, { foreignKey: 'Membresia_idMembresia' });

module.exports = Usuario;
