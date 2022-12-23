const express = require("express");
const router = express.Router();

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  //   organization: "YOUR_ORG_ID",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

let url = "https://api.openai.com/v1/completions";

router.get("/vttTest", (req, res) => {
  console.log("voice to text hit");
  res.status(200).json({
    message: "Route Active.",
    success: true,
  });
});

module.exports = router;
