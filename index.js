const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

app.use("*", cors());
app.use(express.json());
dotenv.config();

app.listen(2309, () => {
  console.log("app running on 2309");
});
