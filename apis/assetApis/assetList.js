const express = require("express");
const router = express.Router();
const Asset = require("../../models/asset");

router.get("/asset/list", async (req, res) => {
  try {
    const assetList = await Asset.find({});
    res.status(200).json({ data: assetList });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
