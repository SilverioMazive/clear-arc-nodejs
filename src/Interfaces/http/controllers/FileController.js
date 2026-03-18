class FileController {
    constructor(uploadFile) {
        this.uploadFile = uploadFile;
    }

    upload(req, res) {
        try {
            const { id } = req.params;

            if (!req.file) {
                throw new Error("File not provided");
            }

            const filePath = req.file.path;

            const account = this.uploadFile.execute(id, filePath);

            res.json(account);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = FileController;