const express = require("express");
const router = express.Router();
const WidgetId = require("../../models/widgetId");

router.get("/dashboard/widgets", async (req, res) => {
  try {
    const widgetList = await WidgetId.find({});
    res.status(200).json({ data: widgetList });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
