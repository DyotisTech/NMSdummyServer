const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetCountSchema = new Schema({
    deviceCount: Number,
});

const AssetCount = mongoose.model("AssetCount", assetCountSchema);

module.exports = AssetCount;