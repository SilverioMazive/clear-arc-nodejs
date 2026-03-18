// src/application/UseCases/UpdateAccountOwner.js

class UpdateAccountOwner {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }

  execute(id, ownerName) {

    const normalizedId = Number(id);

    if (!normalizedId || !ownerName) {
      throw new Error("Invalid input");
    }

    const account = this.accountRepository.findById(normalizedId);

    if (!account) {
      throw new Error("Account not exists");
    }

    // guarda no repository
    account.ownerName = ownerName;
    this.accountRepository.save(account);

    return account;
  }
}

module.exports = UpdateAccountOwner;