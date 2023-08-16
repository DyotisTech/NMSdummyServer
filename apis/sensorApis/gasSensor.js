const express = require("express");
const router = express.Router();
const GasSensorDatapoint = require("../../models/gasSensorDatapoint");

router.get("/sensorData/list/:id/gas", async (req, res) => {
  try {
    const gasSensorDatapoints = await GasSensorDatapoint.find(
      {},
    );
    res.status(200).json({ data: gasSensorDatapoints });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;