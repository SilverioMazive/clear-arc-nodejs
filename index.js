const express = require("express");
require('dotenv').config();

const InMemoryAccountRepository = require("./src/Infraestruture/repositories/InMemoryAccountRepository");

const CreateAccount = require("./src/Application/UseCases/CreateAccount");
const Deposit = require("./src/application/UseCases/Deposit");
const Withdraw = require("./src/application/UseCases/Withdraw");
const GetAccount = require("./src/application/UseCases/GetAccount");
const Transfer = require("./src/application/UseCases/Transfer");
const GetAllAccounts = require("./src/application/UseCases/GetAllAccounts");

const AccountController = require("./src/interfaces/http/AccountController");

// Roteamento 
const createAccountRoutes = require("./src/interfaces/http/routes/accountRoutes");

const app = express();
app.use(express.json());

// instancia repository
const repo = new InMemoryAccountRepository();

// instancia use cases
const createAccount = new CreateAccount(repo);
const deposit = new Deposit(repo);
const withdraw = new Withdraw(repo);
const getAccount = new GetAccount(repo);
const transfer = new Transfer(repo);
const getAllAccounts = new GetAllAccounts(repo);

// controller
const controller = new AccountController(
    createAccount,
    deposit,
    withdraw,
    getAccount,
    transfer,
    getAllAccounts
);

// Definir routas globais
app.use("/", createAccountRoutes(controller));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});