const mongoose = require("mongoose");
const schema = mongoose.Schema;

const widgetIdSchema = new schema({
  id: String,
  name: String,
});

const WidgetId = mongoose.model("WidgetId", widgetIdSchema);

module.exports = WidgetId;
