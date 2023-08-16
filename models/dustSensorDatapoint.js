const mongoose = require("mongoose");
const schema = mongoose.Schema;

const dustSensorDatapointSchema = new schema({
  attributeName: String,
  attributeValue: String,
  eventEpoch: Number,
  receivedEpoch: Number,
});

const DustSensorDatapoint = mongoose.model(
  "DustSensorDatapoint",
  dustSensorDatapointSchema,
);

module.exports = DustSensorDatapoint;
