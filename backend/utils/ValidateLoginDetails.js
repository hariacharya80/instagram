const ValidateLoginDetails = (username, password, res) => {
  if (!username) {
    res.status(401).json({ msg: "Username is required." });
    return false;
  }
  if (!password) {
    res.status(401).json({ msg: "Password is required." });
    return false;
  }
  if (password.length < 6) {
    res
      .status(401)
      .json({ msg: "Password must be at least 6 characters long." });
    return false;
  }
  return true;
};

module.exports = ValidateLoginDetails;
