// src/application/UseCases/CloseAccount.js

class CloseAccount {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }

  execute(id) {

    const normalizedId = Number(id);

    if (!normalizedId) {
      throw new Error("Invalid input");
    }

    const existing = this.accountRepository.findById(normalizedId);

    if (!existing) {
      throw new Error("We didn't find the account");
    }

    // Apagar no repository
    this.accountRepository.delete(normalizedId);

    return account;
  }
}

module.exports = CloseAccount;