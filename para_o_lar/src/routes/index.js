const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    "title": "Brazil Kino API",
    "version": "1.0.0",
    "message": "Boas-vindas!"
  });
});

module.exports = router;