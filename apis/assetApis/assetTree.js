const express = require("express");
const router = express.Router();
const AssetTree = require("../../models/assetTree");

router.get("/asset/tree", async (req, res) => {
  try {
    const assetTree = await AssetTree.find({});
    res.status(200).json({
      data: assetTree,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
