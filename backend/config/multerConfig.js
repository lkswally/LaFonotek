const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Carpeta donde meto las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // genero nombre único agregando DAte.now al principio
  }
});
const upload = multer({ storage: storage });

module.exports = upload;

