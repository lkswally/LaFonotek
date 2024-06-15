//const Disco = require('../models/disco');
const db = require('../models'); // Asegúrate de importar el objeto db desde models/index.js

// Obtener todos los discos
exports.obtenerDiscos = async (req, res) => {
  try {
    const discos = await db.Disco.findAll({
      attributes: ['idDisco', 'nombre', 'precio', 'artista', 'anioLanzamiento', 'GeneroIdGenero', 'imagen'] 
    }); // todos los discos de la base de datos
    res.json(discos); // discos en formato JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los discos' });
  }
};

