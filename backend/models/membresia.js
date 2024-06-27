'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Membresia extends Model {
    static associate(models) {
    }
  }

  Membresia.init({
    idMembresia: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    tipo: DataTypes.STRING,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Membresia',
    timestamps: false
  });

  return Membresia;
};
