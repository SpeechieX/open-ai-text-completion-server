const express = require("express");

const router = express.Router();

router.get("/vttTest", (req, res) => {
  console.log("voice to text hit");
  res.status(200).json({
    message: "Route Active.",
    success: true,
  });
});

module.exports = router;
