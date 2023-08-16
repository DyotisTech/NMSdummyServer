const express = require("express");
const router = express.Router();
const MemoryConsumed = require("../../models/memoryConsumed");

router.get("/metrics/data/3", async (req, res) => {
  try {
    const memoryConsumed = await MemoryConsumed.find({});
    res.status(200).json({ data: memoryConsumed });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
