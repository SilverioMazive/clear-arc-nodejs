function validateRequest(req, res, next) {
  const { id, ownerName } = req.body;
  if (!id || !ownerName) {
    return res.status(400).json({ error: "Missing fields" });
  }
  next();
}

module.exports = validateRequest;