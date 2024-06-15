const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./usuario');

const Carrito = sequelize.define('Carrito', {
  idCarrito: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
});

// Definir relación con Usuario
Carrito.belongsTo(Usuario, { foreignKey: 'Usuario_idUsuario' });

module.exports = Carrito;
