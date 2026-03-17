// src/application/UseCases/Withdraw.js

class Withdraw {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }

    execute(id, amount) {
        if (amount === undefined) {
            throw new Error("Amount is required");
        }

        const account = this.accountRepository.findById(id);

        if (!account) {
            throw new Error("Account not found");
        }

        account.withdraw(amount);

        this.accountRepository.save(account);

        return account;
    }
}

module.exports = Withdraw;