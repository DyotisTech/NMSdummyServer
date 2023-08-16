const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.get("/dashboard/list", async (req, res) => {
  try {
    const userList = await User.find({});
    res.status(200).json({ data: userList[0] });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
