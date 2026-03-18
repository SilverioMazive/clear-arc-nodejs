// src/application/UseCases/CreateAccount.js

const Account = require("../../Domain/Entities/Account");

class CreateAccount {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }

  execute(id, ownerName) {

    const normalizedId = Number(id);

    if (!normalizedId || !ownerName) {
      throw new Error("Invalid input");
    }

    const existing = this.accountRepository.findById(normalizedId);

    if (existing) {
      throw new Error("Account already exists");
    }

    // cria a entidade corretamente
    const account = new Account(id, ownerName);

    // guarda no repository
    this.accountRepository.save(account);

    return account;
  }
}

module.exports = CreateAccount;