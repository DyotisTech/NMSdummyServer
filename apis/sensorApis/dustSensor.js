const express = require("express");
const router = express.Router();
const DustSensorDatapoint = require("../../models/dustSensorDatapoint");

router.get("/sensorData/list/:id/dust", async (req, res) => {
  try {
    const dustSensorDatapoints = await DustSensorDatapoint.find(
      {},
    );
    res.status(200).json({ data: dustSensorDatapoints });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;