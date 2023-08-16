const express = require("express");
const router = express.Router();
const ActiveAlertsSummary = require("../../models/activeAlertsSummary");

router.get("/alert/active/summary", async (req, res) => {
  try {
    const activeAlertsSummary = await ActiveAlertsSummary.find({});
    res.status(200).json({ data: activeAlertsSummary });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
