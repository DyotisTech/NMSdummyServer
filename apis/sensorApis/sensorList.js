const express = require("express");
const router = express.Router();
const Sensor = require("../../models/sensor");

router.get("/sensor/list", async (req, res) => {
  try {
    const sensorList = await Sensor.find({});
    res.status(200).json({ data: sensorList });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
