const { Membresia } = require('../models');

exports.obtenerMembresia = async (req, res) => {
  try {
    const generos = await Membresia.findAll();
    res.json(membresia); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las membresias' });
  }
};