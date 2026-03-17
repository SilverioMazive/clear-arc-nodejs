// src/application/UseCases/GetAccount.js

class GetAllAccounts {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }

    execute() {
        const account = this.accountRepository.findAll();

        if (!account) {
            throw new Error("Account not found");
        }

        return account;
    }
}

module.exports = GetAllAccounts;