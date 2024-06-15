const { defineConfig } = require('@vue/cli-service');
const dotenv = require('dotenv');

dotenv.config(); // Cargar variables de entorno desde .env

module.exports = defineConfig({
  transpileDependencies: true,
});