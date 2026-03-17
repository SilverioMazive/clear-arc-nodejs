// src/application/UseCases/Transfer.js

class Transfer {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }

    execute(fromId, toId, amount) {
        if (fromId === toId) {
            throw new Error("Cannot transfer to same account");
        }

        if (amount === undefined) {
            throw new Error("Amount is required");
        }

        const fromAccount = this.accountRepository.findById(fromId);
        const toAccount = this.accountRepository.findById(toId);

        if (!fromAccount || !toAccount) {
            throw new Error("Account not found");
        }

        // operação principal
        fromAccount.withdraw(amount);
        toAccount.deposit(amount);

        this.accountRepository.save(fromAccount);
        this.accountRepository.save(toAccount);

        return {
            from: fromAccount,
            to: toAccount
        };
    }
}

module.exports = Transfer;