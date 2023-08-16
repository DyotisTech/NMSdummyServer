const express = require("express");
const router = express.Router();
const AssetSensor = require("../../models/assetSensor");

router.get("/sensorData/list/:id", async (req, res) => {
  try {
    const assetSensorList = await AssetSensor.find({});
    res.status(200).json({ data: assetSensorList });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;