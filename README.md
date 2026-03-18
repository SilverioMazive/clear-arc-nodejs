# Node.js Clean Architecture Boilerplate

This project is a **boilerplate for Clean Architecture in Node.js**, structured to provide clear separation of responsibilities, maintainability, and scalability.

It includes example endpoints for **bank accounts**, supporting CRUD operations, financial transactions, and file uploads.

---

## Project Structure

```
project-root/
│
├─ index.js                # Application entry point
├─ package.json
├─ .env                    # Environment variables
│
├─ uploads/                # Directory for uploaded files
│
├─ src/
│   ├─ domain/
│   │   └─ entities/       # Pure business rules (e.g. Account.js)
│   │
│   ├─ infrastructure/
│   │   └─ repositories/   # Data storage (e.g. InMemoryAccountRepository.js)
│   │
│   ├─ application/
│   │   └─ UseCases/       # Application logic (e.g. CreateAccount, Deposit, UploadFile)
│   │
│   ├─ interfaces/
│   │   └─ http/
│   │       ├─ controllers/  # HTTP controllers (e.g. AccountController, FileController)
│   │       ├─ routes/       # Route definitions (e.g. accountRoutes.js)
│   │       └─ middlewares/  # HTTP middlewares (e.g. uploadMiddleware.js, validateRequest.js)
│   │
│   └─ shared/
│       └─ helpers/         # Utility functions (e.g. normalizeId.js, fileStorage.js)
```

---

## Features

* **Account management**: create, retrieve, and list accounts
* **Financial operations**: deposit, withdraw, and transfer
* **File uploads**: upload images or documents, with automatic creation of `uploads` folder
* **ID consistency**: all IDs are handled as strings to avoid conflicts
* **Clean Architecture principles**: domain, application, infrastructure, and interface layers separated

---

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file :

```
PORT=3000
```

3. Start the server:

```bash
node index.js
```

The server will run on the configured port (default 3000).

---

## Example Endpoints

* `POST /accounts` → Create a new account
* `POST /accounts/deposit` → Deposit funds
* `POST /accounts/withdraw` → Withdraw funds
* `POST /accounts/transfer` → Transfer funds
* `GET /accounts-find/:id` → Retrieve account by ID
* `GET /accounts-all` → List all accounts
* `POST /accounts-upload/photo/:id` → Upload file for a specific account

---
