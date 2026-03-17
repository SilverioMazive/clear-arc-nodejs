// src/application/UseCases/GetAccount.js

class GetAccount {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }

    execute(id) {
        const account = this.accountRepository.findById(id);

        if (!account) {
            throw new Error("Account not found");
        }

        return account;
    }
}

module.exports = GetAccount;