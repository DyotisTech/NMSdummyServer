const mongoose = require("mongoose");
const schema = mongoose.Schema;

const widgetSchema = new schema({
  widgetId: String,
  primaryLabel: String,
  secondaryLabel: String,
  getDataURL: String,
  setDataURL: String,
  apiCode: String,
  hasWebSocketUpdate: Boolean,
  refreshInterval: Number,
  thresholdLower: Number,
  thresholdUpper: Number,
  location: String,
  legendField: String,
  valueField: String,
  columns: Array,
  actions: Array,
  legendFieldDataType: String,
  valueFieldDataType: String,
  widgetType: String,
  showLegends: Boolean,
  imageName: String,
  width: Number,
  height: Number,
  min: Number,
  max: Number,
});

const Widget = mongoose.model("Widget", widgetSchema);

module.exports = Widget;