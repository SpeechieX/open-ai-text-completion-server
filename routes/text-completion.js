const express = require("express");

const router = express.Router();

router.get("tcTest", (req, res) => {
  console.log("text-completion active.");
  res.status(200).json({
    message: "Route Active.",
    success: true,
  });
});

module.exports = router;
