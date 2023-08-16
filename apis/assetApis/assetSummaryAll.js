const express = require("express");
const router = express.Router();
const AssetSummaryAll = require("../../models/assetSummaryAll");

router.get("/asset/summary/all", async (req, res) => {
  try {
    const assetSummaryAll = await AssetSummaryAll.find({});
    res.status(200).json({ data: assetSummaryAll });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
