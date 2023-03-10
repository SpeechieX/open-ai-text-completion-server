const express = require("express");
const router = express.Router();
const axios = require("axios");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  //   organization: "YOUR_ORG_ID",
  // apiKey: "",
});

const openai = new OpenAIApi(config);

router.post("/testResponse", async (req, res) => {
  const { prompt } = req.body;
  const pleaseRespond = async (data) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `\nQ: ${data}\nA:`,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });

    if (response.data) {
      res.status(201).json({
        results: response.data.choices[0].text,
      });
    }
  };

  pleaseRespond(prompt);
});

module.exports = router;
