const mongoose = require("mongoose");
const schema = mongoose.Schema;

const humiditySensorDatapointSchema = new schema({
  attributeName: String,
  attributeValue: String,
  eventEpoch: Number,
  receivedEpoch: Number,
});

const HumiditySensorDatapoint = mongoose.model(
  "HumiditySensorDatapoint",
  humiditySensorDatapointSchema,
);

module.exports = HumiditySensorDatapoint;
