const UserAccountModel = require("../../models/UserAccount.model");
const ValidateLoginDetails = require("../../utils/ValidateLoginDetails");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
dotenv.config();

const JSON_SECRET_STRING = process.env.JWT_SECRET;

const LoginController = async (req, res) => {
  const { username, password } = req.body;
  const validation = ValidateLoginDetails(username, password, res);
  if (!validation) return;
  try {
    const userWithUsername = await UserAccountModel.findOne({ username });
    const userWithEmail = await UserAccountModel.findOne({ email: username });
    if (!userWithEmail && !userWithUsername) {
      return res
        .status(401)
        .json({ msg: "User with that username or email don't exist." });
    }
    const user = userWithEmail;
    if (!userWithEmail) {
      user = userWithUsername;
    }
    const passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched)
      return res.status(401).json({ msg: "Wrong password, please try again." });
    const token = jwt.sign({ username: user.username }, JSON_SECRET_STRING);
    const updatedUserWithToken = await UserAccountModel.findOneAndUpdate(
      { username: user.username },
      {
        authToken: token,
      }
    );
    if (!updatedUserWithToken) {
      return res.status(500).json({ msg: "User can not be logged in." });
    }

    res.cookie("auth", token, { maxAge: 8640000 }); //1 day in miliseconds.
    return res.status(200).json({ msg: "User signed in successfully." });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "User can not be logged in." });
  }
};

module.exports = LoginController;
