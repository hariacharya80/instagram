const express = require("express");
const LoginController = require("../controllers/Auth/Login.controller");
const SignupController = require("../controllers/Auth/Signup.controller");
const ResetController = require("../controllers/Auth/Reset.controller");
const AuthRouter = express.Router();

AuthRouter.post("/login", LoginController);
AuthRouter.post("/signup", SignupController);
AuthRouter.post("/reset", ResetController);

module.exports = AuthRouter;
