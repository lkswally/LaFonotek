const { Disco } = require('../models');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nombre único para la imagen
  }
});
const upload = multer({ storage: storage });


exports.obtenerDiscos = async (req, res) => {
  try {
    const discos = await Disco.findAll({
      attributes: ['idDisco', 'nombre', 'precio', 'artista', 'anioLanzamiento', 'GeneroIdGenero', 'imagen'] 
    }); // todos los discos de la base de datos
    res.json(discos); // discos en formato JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los discos' });
  }
};

exports.obtenerDiscoPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const disco = await Disco.findByPk(id);

    if (!disco) {
      return res.status(404).json({ error: 'Disco no encontrado' });
    }

    res.json(disco);
  } catch (error) {
    console.error('Error al obtener el disco:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

exports.editarDisco = [
  upload.single("imagen"),
  async (req, res) => {
  const { id } = req.params;
  const { nombre, artista, genero, anio, precio, stock } = req.body;

  try {
    const disco = await Disco.findByPk(id);
    if (!disco) {
      return res.status(404).json({ error: 'Disco no encontrado' });
    }

    // Acá actualizo los campos del form
    disco.nombre = nombre;
    disco.artista = artista;
    disco.genero = genero;
    disco.anioLanzamiento = anio;
    disco.precio = precio;
    disco.stock = stock;

    // y actualizo la imágen si se seleccionó un archivo
    if (req.file) {
      disco.imagen = req.file.filename;
    }

    await disco.save();

    res.json({ message: 'Disco actualizado exitosamente', disco });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el disco' });
  }
}];

exports.eliminarDisco = async (req, res) => {
  const { id } = req.params;

  try {
    const disco = await Disco.findByPk(id);
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

