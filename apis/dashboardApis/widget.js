const express = require("express");
const router = express.Router();
const Widget = require("../../models/widget");

router.get("/dashboard/widget/:id", async (req, res) => {
  try {
    const widgets = await Widget.find({ widgetId: req.params.id });
    res.status(200).json({ data: widgets[0] });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
