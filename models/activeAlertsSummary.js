const mongoose = require("mongoose");
const schema = mongoose.Schema;

const activeAlertsSummarySchema = new schema({
  count: Number,
  service: String,
});

const ActiveAlertsSummary = mongoose.model(
  "ActiveAlertsSummary",
  activeAlertsSummarySchema,
);

module.exports = ActiveAlertsSummary;
