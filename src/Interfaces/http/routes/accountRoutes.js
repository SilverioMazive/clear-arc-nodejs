// src/interfaces/http/routes/accountRoutes.js

const express = require("express");
const validateRequest = require('../middlewares/validateRequest');
const upload = require('../middlewares/uploadMiddleware');

module.exports = (accountController, fileController) => {
    const router = express.Router();

    router.post("/accounts", validateRequest, (req, res) =>
        accountController.create(req, res)
    );

    router.post("/accounts/deposit", (req, res) =>
        accountController.depositAmount(req, res)
    );

    router.post("/accounts/withdraw", (req, res) =>
        accountController.withdrawAmount(req, res)
    );

    router.post("/accounts/transfer", (req, res) =>
        accountController.transferAmount(req, res)
    );

    router.get("/accounts-find/:id", (req, res) =>
        accountController.get(req, res)
    );

    router.get("/accounts-all", (req, res) =>
        accountController.getAll(req, res)
    );

    // Falta teste com isso
    router.post(
        "/accounts-upload/photo/:id",
        upload.single("file"),
        (req, res) => fileController.upload(req, res)
    );

    return router;
};