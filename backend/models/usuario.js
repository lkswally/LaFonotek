'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true // Indica que esta es la clave primaria
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Usuario',
    timestamps: false
  });
  return Usuario;
};