// src/infrastructure/repositories/InMemoryAccountRepository.js

class InMemoryAccountRepository {
    constructor() {
        this.accounts = new Map();
    }

    save(account) {
        this.accounts.set(account.id, account);
    }

    findById(id) {
        return this.accounts.get(id);
    }

    findAll() {
        return Array.from(this.accounts.values());
    }
}

module.exports = InMemoryAccountRepository;