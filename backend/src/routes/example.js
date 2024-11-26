const express = require("express");
const router = express.Router();

// مسار تجريبي
router.get("/", (req, res) => {
  res.json({ message: "Example API route" });
});

module.exports = router;
