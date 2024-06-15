const Disco = require('../models/disco');

// Obtener todos los discos
exports.obtenerDiscos = async (req, res) => {
  try {
    const discos = await Disco.findAll();
    res.json(discos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los discos' });
  }
};

// Obtener un disco por ID
exports.obtenerDiscoPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const disco = await Disco.findByPk(id);
    if (!disco) {
      return res.status(404).json({ error: 'Disco no encontrado' });
    }
    res.json(disco);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el disco' });
  }
};

// Crear un nuevo disco
exports.crearDisco = async (req, res) => {
  const { nombre, precio, artista, anioLanzamiento, Categoria_idCategoria } = req.body;
  try {
    const nuevoDisco = await Disco.create({
      nombre,
      precio,
      artista,
      anioLanzamiento,
      Categoria_idCategoria
    });
    res.status(201).json(nuevoDisco);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el disco' });
  }
};

// Actualizar un disco
exports.actualizarDisco = async (req, res) => {
  const id = req.params.id;
  const { nombre, precio, artista, anioLanzamiento, Categoria_idCategoria } = req.body;
  try {
    const disco = await Disco.findByPk(id);
    if (!disco) {
      return res.status(404).json({ error: 'Disco no encontrado' });
    }
    await disco.update({
      nombre,
      precio,
      artista,
      anioLanzamiento,
      Categoria_idCategoria
    });
    res.json(disco);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el disco' });
  }
};

// Eliminar un disco
exports.eliminarDisco = async (req, res) => {
  const id = req.params.id;
  try {
    const disco = await Disco.findByPk(id);
    if (!disco) {
      return res.status(404).json({ error: 'Disco no encontrado' });
    }
    await disco.destroy();
    res.json({ mensaje: 'Disco eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el disco' });
  }
};
