const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const { db, encrypt } = require("./config");

const vttController = require("./routes/voice-to-text");
const tcController = require("./routes/text-completion");

const app = express();

app.use("*", cors());
app.use(express.json());
dotenv.config();
// db();

app.use("/textCompletion", tcController);
app.use("/voice-tt", vttController);

app.listen(2309, () => {
  console.log("app running on 2309");
});
