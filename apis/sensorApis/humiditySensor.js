const express = require("express");
const router = express.Router();
const HumiditySensorDatapoint = require("../../models/humiditySensorDatapoint");

router.get("/sensorData/list/:id/humidity", async (req, res) => {
  try {
    const humiditySensorDatapoints = await HumiditySensorDatapoint.find(
      {},
    );
    res.status(200).json({ data: humiditySensorDatapoints });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;