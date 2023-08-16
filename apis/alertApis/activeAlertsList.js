const express = require("express");
const router = express.Router();
const ActiveAlert = require("../../models/activeAlert");

router.get("/alert/active/list", async (req, res) => {
  try {
    const activeAlertsList = await ActiveAlert.find({});
    res.status(200).json({ data: activeAlertsList });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
