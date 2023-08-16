const express = require("express");
const router = express.Router();
const AssetCount = require("../../models/assetCount");

router.get("/asset/count", async (req, res) => {
  try {
    const assetCount = await AssetCount.find({});
    res.status(200).json({ data: assetCount[0] });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;