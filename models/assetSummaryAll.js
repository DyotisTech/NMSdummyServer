const mongoose = require("mongoose");
const schema = mongoose.Schema;

const assetSummaryAllSchema = new schema({
  count: Number,
  category: String,
});

const AssetSummaryAll = mongoose.model(
  "AssetSummaryAll",
  assetSummaryAllSchema,
);

module.exports = AssetSummaryAll;
