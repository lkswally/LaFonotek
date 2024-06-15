const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // <-- conexión a la base de datos!

const Disco = sequelize.define('Disco', {
  idDisco: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  artista: {
    type: DataTypes.STRING
  },
  anioLanzamiento: {
    type: DataTypes.INTEGER
  },
  GeneroIdGenero: { // Clave foránea
    type: DataTypes.INTEGER,
    references: {
      model: 'Generos', // Nombre del modelo de la tabla relacionada
      key: 'idGenero'
    }
  }
});

module.exports = Disco;
