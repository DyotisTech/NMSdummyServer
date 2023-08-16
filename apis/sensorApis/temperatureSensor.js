const express = require("express");
const router = express.Router();
const TemperatureSensorDatapoint = require("../../models/temperatureSensorDatapoint");

router.get("/sensorData/list/:id/temp", async (req, res) => {
  try {
    const temperatureSensorDatapoints = await TemperatureSensorDatapoint.find(
      {},
    );
    res.status(200).json({ data: temperatureSensorDatapoints });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;