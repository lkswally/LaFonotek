'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('discos', {
      idDisco: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.DECIMAL
      },
      artista: {
        type: Sequelize.STRING
      },
      anioLanzamiento: {
        type: Sequelize.INTEGER
      },
      GeneroIdGenero: {
        type: Sequelize.INTEGER
      },
      imagen: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('discos');
  }
};