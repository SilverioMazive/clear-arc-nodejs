const multer = require("multer");
const path = require("path");
const { ensureUploadDirExists } = require("../../../shared/helpers/fileStorage");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = ensureUploadDirExists(); // 🔥 cria se não existir
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const upload = multer({ storage });

module.exports = upload;