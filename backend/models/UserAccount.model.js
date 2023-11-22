const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
  },
  verified: {
    type: Boolean,
  },
  emailVerified: {
    type: Boolean,
  },
  image: {
    type: String,
    default: "default",
  },
});

module.exports = mongoose.model("UserAccounts", userSchema, "UserAccounts");
