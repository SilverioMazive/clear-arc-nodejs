// src/domain/entities/Account.js

class Account {
    constructor(id, ownerName) {
        if (!id) throw new Error("Id is required");
        if (!ownerName) throw new Error("Owner name is required");

        this.id = Number(id);
        this.ownerName = ownerName;
        this.balance = 0;
    }

    deposit(amount) {
        if (amount <= 0) throw new Error("Invalid amount");
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (amount <= 0) throw new Error("Invalid amount");
        if (amount > this.balance) throw new Error("Insufficient funds");
        this.balance -= amount;
        return this.balance;
    }

    getBalance() {
        return this.balance;
    }
}

module.exports = Account;