class UploadFile {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }

  execute(accountId, filePath) {
    const account = this.accountRepository.findById(accountId);

    if (!account) {
      throw new Error("Account not found");
    }

    // associar o ficheiro à conta
    account.photo = filePath;

    this.accountRepository.save(account);

    return account;
  }
}

module.exports = UploadFile;