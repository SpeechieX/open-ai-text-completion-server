# OpenAI Text Completion Service

This project uses Node.js, Express and OpenAI's Text Completion API to accept text prompts and return answers.

## Installation

To install this project, follow these steps:

- Step 1: Clone this repository
- Step 2: Enter the directory and run `npm install` and then `npm run dev`

## Add Your API Key

- Add your Keys to the Configuration object in `/routes/voice-to-text-.js`

```javascript
const config = new Configuration({
  organization: <YOUR_ORG_ID>,
  apiKey: <YOUR_API_KEY>,
});
```
