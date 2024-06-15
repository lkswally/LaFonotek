const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Membresia = sequelize.define('Membresia', {
  idMembresia: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descuento: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  }
});

module.exports = Membresia;
