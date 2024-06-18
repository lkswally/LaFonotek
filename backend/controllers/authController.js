const Usuario = require('../models').Usuario;
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  console.log('Datos recibidos:', req.body);
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    console.log('Usuario encontrado:', usuario);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const validPassword = await bcrypt.compare(password, usuario.contrasena);
    console.log('Contraseña válida:', validPassword);
    if (!validPassword) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Almacenar datos del usuario en la sesión
    req.session.usuario = {
      idUsuario: usuario.idUsuario,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      isStaff: usuario.isStaff
    };

    res.json({ 
      message: 'Login exitoso',
      usuario,
      isAdmin: usuario.isStaff === true
     }); // Enviamos los datos del usuario al frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Tenemos un error en el servidor' });
  }
};

exports.signup = async (req, res) => {
  // lógica para manejar el registro de usuarios
  const { nombre, apellido, email, password } = req.body;

  try {
    // Validación de datos
    if (!nombre || !apellido || !email || !password) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Se verifica si el email ya existe
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(409).json({ error: 'El email ya está registrado' });
    }

    // Se hashea la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Se crea el usuario en la base de datos
    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      email,
      contrasena: hashedPassword // contraseña hasheada
    });

    res.status(201).json({ message: 'Usuario creado exitosamente', usuario: nuevoUsuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};
