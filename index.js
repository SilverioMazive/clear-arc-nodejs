const express = require("express");
require("dotenv").config();

// Repository
const InMemoryAccountRepository = require("./src/Infraestruture/repositories/InMemoryAccountRepository");

// Use Cases
const CreateAccount = require("./src/application/UseCases/CreateAccount");
const Deposit = require("./src/application/UseCases/Deposit");
const Withdraw = require("./src/application/UseCases/Withdraw");
const GetAccount = require("./src/application/UseCases/GetAccount");
const Transfer = require("./src/application/UseCases/Transfer");
const GetAllAccounts = require("./src/application/UseCases/GetAllAccounts");
const UploadFile = require("./src/application/UseCases/UploadFile");
const CloseAccount = require("./src/application/UseCases/CloseAccount");

// Controllers
const AccountController = require("./src/interfaces/http/controllers/AccountController");
const FileController = require("./src/interfaces/http/controllers/FileController");

// Routes
const accountRoutes = require("./src/interfaces/http/routes/accountRoutes");

const app = express();
app.use(express.json());

/* =========================
   INSTÂNCIAS
========================= */

// Repository
const repo = new InMemoryAccountRepository();

// Use Cases
const createAccount = new CreateAccount(repo);
const deposit = new Deposit(repo);
const withdraw = new Withdraw(repo);
const getAccount = new GetAccount(repo);
const transfer = new Transfer(repo);
const getAllAccounts = new GetAllAccounts(repo);
const uploadFile = new UploadFile(repo);
const closeAccount = new CloseAccount(repo);

// Controllers
const accountController = new AccountController(
    createAccount,
    deposit,
    withdraw,
    getAccount,
    transfer,
    getAllAccounts,
    closeAccount
);

const fileController = new FileController(uploadFile);

/* =========================
   ROUTES
========================= */

app.use("/", accountRoutes(accountController, fileController));

/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});