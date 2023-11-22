const validateSignupDetails = (name, email, username, password, res) => {
  if (!name) {
    res.status(401).json({
      msg: "Your name is required.",
    });
    return false;
  }
  if (!username) {
    res.status(401).json({
      msg: "Please set a valid username.",
    });
    return false;
  }
  if (!email) {
    res.status(401).json({
      msg: "Email address is required.",
    });
    return false;
  }
  if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    res.status(401).json({ msg: "Please provide a valid email address" });
    return false;
  }
  if (!password) {
    res.status(401).json({
      msg: "Password is required.",
    });
    return false;
  }
  if (password.length < 6) {
    res.status(401).json({ msg: "Password must be minimum of 6 characters." });
    return false;
  }
  return true;
};

module.exports = validateSignupDetails;
