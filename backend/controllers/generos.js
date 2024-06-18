const { Genero } = require('../models');

exports.obtenerGeneros = async (req, res) => {
  try {
    const generos = await Genero.findAll();
    res.json(generos); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los géneros' });
  }
};
