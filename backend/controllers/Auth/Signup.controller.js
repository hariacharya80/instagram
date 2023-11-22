const bcrypt = require("bcrypt");
const UserAccountModel = require("../../models/UserAccount.model");
const SignupController = async (req, res) => {
  const { name, email, username, password } = req.body;
  const validation = validateSignupDetails(
    name,
    email,
    username,
    password,
    res
  );
  if (!validation) return;
  try {
    const userWithEmail = await UserAccountModel.findOne({
      email,
    });
    if (userWithEmail)
      return res
        .status(401)
        .json({ msg: "User with that email already exists." });
    const userWithUsername = await UserAccountModel.findOne({
      username,
    });
    if (userWithUsername) {
      return res
        .status(401)
        .json({ msg: "User with that username already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserAccountModel.create({
      name,
      email,
      emailVerified: false,
      image: "default",
      password: hashedPassword,
      username,
      verified: false,
    });
    await newUser.save();
    return res.status(200).json({ msg: "User signed up successfully." });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Unknown server error" });
  }
};

module.exports = SignupController;

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
