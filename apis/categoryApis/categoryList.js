const express = require("express");
const router = express.Router();
const Category = require("../../models/category");

router.get("/category/list", async (req, res) => {
  try {
    const categoryList = await Category.find({});
    res.status(200).json({ data: categoryList });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
