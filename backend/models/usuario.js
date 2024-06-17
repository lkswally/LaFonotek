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
      primaryKey: true
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    isStaff: {
      type: DataTypes.BOOLEAN,
      defaultValue: false // por defecto, no es staff
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    timestamps: false
  });
  return Usuario;
};