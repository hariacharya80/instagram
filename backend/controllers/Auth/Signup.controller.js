const bcrypt = require("bcrypt");
const UserAccountModel = require("../../models/UserAccount.model");
const validateSignupDetails = require("../../utils/ValidateSignupDetails");

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
