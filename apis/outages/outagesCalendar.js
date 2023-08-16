const express = require("express");
const router = express.Router();
const OutagesCalendar = require("../../models/outagesCalendar");

router.get("/outage/summary/calendar/:startDate/:endDate", async (req, res) => {
    try {
    const outagesCalendar = await OutagesCalendar.find({});
    res.status(200).json({ data: outagesCalendar });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
