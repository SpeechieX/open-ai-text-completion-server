const express = require("express");
const router = express.Router();
const axios = require("axios");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  //   organization: "YOUR_ORG_ID",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

let URL = "https://api.openai.com/v1/completions";

router.post("/vttTest", async (req, res) => {
  const { model, prompt, temperature, max_tokens } = req.body;

  try {
    const response = await openai.listEngines({
      model: model,
      prompt: prompt,
      n: 1,
      temperature: 1,
      max_tokens: max_tokens,
    });

    const results = response.data.data;

    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
