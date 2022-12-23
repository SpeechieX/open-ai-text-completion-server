const express = require("express");
const router = express.Router();
const axios = require("axios");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  //   organization: "YOUR_ORG_ID",
  apiKey: '',
});

const openai = new OpenAIApi(config);

const pleaseRespond = async() => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "\nQ: How old is Jay-Z?\nA:",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  });
  
  console.log(response.data)
};

pleaseRespond()






// let URL = "https://api.openai.com/v1/completions";

// router.post("/vttTest", async (req, res) => {
//   const { model, prompt, temperature, max_tokens } = req.body;

//   try {
//     const response = await openai.listEngines({
//       model: model,
//       prompt: prompt,
//       n: 1,
//       temperature: 1,
//       max_tokens: max_tokens,
//     });

//     const results = response.data.data;
//     console.log("results" +  results);
//     console.log("response" +  response);
//     console.log("working");

//     res.status(200).json({
//       success: true,
//       data: results,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
