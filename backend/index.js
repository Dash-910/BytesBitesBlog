const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

const connectToMongo = require("./db");

dotenv.config();
app.use(express.json());

connectToMongo(); 

app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);


app.listen("5000", () => {
  console.log("Backend is running.");
});