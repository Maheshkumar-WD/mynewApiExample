const express = require("express");
const app = express();
require("dotenv").config();

app.get("/",(req,res)=>{
     res.send("Welcome to the mock server")
})

let PORT = process.env.PORT || 8080
app.listen(PORT)