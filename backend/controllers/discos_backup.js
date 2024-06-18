//const { Disco } = require('../models');
const db = require('../models'); 

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

exports.editarDisco = async (req, res) => {
  const { id } = req.params;
  const { nombre, artista, genero, anio, precio, stock, imagen } = req.body;

  try {
    const disco = await db.Disco.findByPk(id);
    if (!disco) {
      return res.status(404).json({ error: 'Disco no encontrado' });
    }

    // Actualizar los campos del disco
    disco.nombre = nombre;
    disco.artista = artista;
    disco.genero = genero; // Asegúrate de tener estos campos en tu modelo
    disco.anioLanzamiento = anio;
    disco.precio = precio;
    disco.stock = stock;
    disco.imagen = imagen;

    await disco.save();

    res.json({ message: 'Disco actualizado exitosamente', disco });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el disco' });
  }
};

exports.eliminarDisco = async (req, res) => {
  const { id } = req.params;

  try {
    const disco = await db.Disco.findByPk(id);
    if (!disco) {
      return res.status(404).json({ error: 'Disco no encontrado' });
    }

    await disco.destroy();

    res.json({ message: 'Disco eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el disco' });
  }
};

