const express = require("express");
const router = express.Router();
const Location = require("../../models/location");

router.get("/dashboard/locations", async (req, res) => {
  try {
    const locations = await Location.find({});
    res.status(200).json({ data: locations });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/location/update", async (req, res) => {
  try {
    const { id, xcoordinate, ycoordinate, configuration } = req.body;
    const updatedLocation = await Location.findOneAndUpdate(
      { id },
      { id, xcoordinate, ycoordinate, configuration },
      { new: true },
    );

    res.status(200).json({ data: updatedLocation });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
