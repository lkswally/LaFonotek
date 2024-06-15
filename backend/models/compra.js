const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Asegúrate de tener la conexión a la base de datos
const Usuario = require('./usuario');
const Disco = require('./disco');

const Compra = sequelize.define('Compra', {
  idCompra: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW // Establece la fecha actual por defecto
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
});

// Definir relaciones con Usuario y Disco
Compra.belongsTo(Usuario, { foreignKey: 'Usuario_idUsuario' });
Compra.belongsTo(Disco, { foreignKey: 'Disco_idDisco' });

module.exports = Compra;
