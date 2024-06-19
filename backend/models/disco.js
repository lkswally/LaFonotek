'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Disco extends Model {
    static associate(models) {
      this.belongsTo(models.Genero, { foreignKey: 'GeneroIdGenero', as: 'genero' });
    }
  }

  Disco.init({
    idDisco: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    nombre: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    artista: DataTypes.STRING,
    anioLanzamiento: DataTypes.INTEGER,
    GeneroIdGenero: DataTypes.INTEGER,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Disco',
    timestamps: false
  });

  return Disco;
};
