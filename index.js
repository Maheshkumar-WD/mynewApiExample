const express = require("express");
const app = express();
require("dotenv").config();

let PORT = process.env.PORT || 8080
app.listen(PORT)