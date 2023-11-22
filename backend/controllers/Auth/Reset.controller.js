const UserAccountModel = require("../../models/UserAccount.model");
const jwt = require("jsonwebtoken");
const sendResetEmail = require("../../utils/SendResetEmail");

const JWT_SECRET_STRING = process.env.JWT_SECRET;

const ResetController = async (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(401).json({
      msg: "No user found with that username or email.",
    });
  }
  try {
    const userWithEmail = await UserAccountModel.findOne({ email: username });
    const userWithUsername = await UserAccountModel.findOne({ username });
    const user = userWithEmail;

    if (!userWithEmail) {
      user = userWithUsername;
    }

    if (!user)
      return res
        .status(404)
        .json({ msg: "No user found with that email or username." });

    const token = await jwt.sign(
      { username: user.username },
      JWT_SECRET_STRING
    );
    await sendResetEmail(user.name, user.email, token);
    return res
      .status(200)
      .json({ msg: "Password reset email sent successfully." });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: "An unknown server error while sending email" });
  }
};

module.exports = ResetController;
