const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config(); // load env files

//env variables
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;
//app middlewares
app.use(express.json());

main(); // call main function

//main application
async function main() {
  await connectDatabase();
  console.log("👉 : Starting Server");
  try {
    app.listen(PORT || 3000);
    console.log("✅ : Server started successfully.");
  } catch (e) {
    console.log("🍎 : Error starting server.");
    process.exit(1);
  }
}

//for database
const connectDatabase = async () => {
  console.log("👉 : Connecting to Database.");
  try {
    await mongoose.connect(DB_URL);
    console.log("✅ : Connection Successful.");
  } catch (e) {
    console.log("🍎 : Connecting to Database failed" + e);
    process.exit(1);
  }
};
