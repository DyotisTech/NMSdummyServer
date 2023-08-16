const mongoose = require("mongoose");
const schema = mongoose.Schema;

const activeAlertSchema = new schema({
  id: Number,
  assetId: Number,
  categoryCode: String,
  serviceCode: String,
  status: Boolean,
  alertGeneratedOn: Number,
  alertClosedOn: Number,
  ipAddress: String,
  nodeName: String,
  alias: String,
  severity: Number,
});

const ActiveAlert = mongoose.model("ActiveAlert", activeAlertSchema);

module.exports = ActiveAlert;
