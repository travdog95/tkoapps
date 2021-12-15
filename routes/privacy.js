const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("score-king/privacy");
});

module.exports = router;
