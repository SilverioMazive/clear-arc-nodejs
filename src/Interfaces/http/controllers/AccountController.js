class AccountController {
    constructor(createAccount, deposit, withdraw, getAccount, transfer, getAllAccounts, closeAccount) {
        this.createAccount = createAccount;
        this.deposit = deposit;
        this.withdraw = withdraw;
        this.getAccount = getAccount;
        this.transfer = transfer;
        this.getAllAccounts = getAllAccounts;
        this.closeAccount = closeAccount;
    }

    create(req, res) {
        try {
            const { id, ownerName } = req.body;
            const account = this.createAccount.execute(id, ownerName);
            res.status(201).json(account);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    depositAmount(req, res) {
        try {
            const { id, amount } = req.body;
            this.deposit.execute(id, amount);
            res.json({ success: true });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    withdrawAmount(req, res) {
        try {
            const { id, amount } = req.body;
            this.withdraw.execute(id, amount);
            res.json({ success: true });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    transferAmount(req, res) {
        try {
            const { fromId, toId, amount } = req.body;
            this.transfer.execute(fromId, toId, amount);
            res.json({ success: true });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    get(req, res) {
        try {
            const { id } = req.params;
            const account = this.getAccount.execute(id);
            if (!account) return res.status(404).json({ error: "Account not found" });
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

    closeAccountAction(req, res) {
        try {
            const { id } = req.params;
            const account = this.closeAccount.execute(id);
            if (!account) return res.status(404).json({ error: "Account not found" });
            res.json(account);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } 
    
}

module.exports = AccountController;
