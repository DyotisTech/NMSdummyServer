const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetSchema = new Schema({
  id: Number,
  nodeId: Number,
  ipAddress: String,
  nodeName: String,
  category: String,
  oid: String,
  status: Boolean,
  switchIP: String,
  switchPort: Number,
  stackId: Number,
  location: String,
  severity: Number,
  severityForeGroundColor: String,
  severityBackGroundColor: String,
  managementURL: String,
  liveStatusURL: String,
  backgroundURL: String,
  deviceMessage: String,
  serverGroupId: String,
  control: String,
  xcoordinate: String,
  ycoordinate: String,
});

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;