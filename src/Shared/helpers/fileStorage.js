const fs = require("fs");
const path = require("path");

function ensureUploadDirExists() {
    const uploadPath = path.resolve("uploads");

    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
    }

    return uploadPath;
}

module.exports = {
    ensureUploadDirExists
};