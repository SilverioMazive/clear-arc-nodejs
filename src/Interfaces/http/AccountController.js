// src/interfaces/http/AccountController.js

class AccountController {
    constructor(createAccount, deposit, withdraw, getAccount, transfer, getAllAccounts) {
        this.createAccount = createAccount;
        this.deposit = deposit;
        this.withdraw = withdraw;
        this.getAccount = getAccount;
        this.transfer = transfer;
        this.getAllAccounts = getAllAccounts;
    }

    create(req, res) {
        const { id, ownerName } = req.body;

        const account = this.createAccount.execute(id, ownerName);

        res.json(account);
    }

    depositAmount(req, res) {
        const { id, amount } = req.body;

        this.deposit.execute(id, amount);

        res.json({ success: true });
    }

    withdrawAmount(req, res) {
        const { id, amount } = req.body;

        this.withdraw.execute(id, amount);

        res.json({ success: true });
    }

    transferAmount(req, res) {
        const { fromId, toId, amount } = req.body;

        this.transfer.execute(fromId, toId, amount);

        res.json({ success: true });
    }

    get(req, res) {
        try {
            const { id } = req.params;
            const account = this.getAccount.execute(id);

            if (!account) {
                return res.status(404).json({ error: "Account not found" });
            }

            res.json(account);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    getAll(req, res) {
        try {
            const accounts = this.getAllAccounts.execute();
            res.json(accounts);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = AccountController;