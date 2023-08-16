const mongoose = require("mongoose");
const schema = mongoose.Schema;

const temperatureSensorDatapointSchema = new schema({
  attributeName: String,
  attributeValue: String,
  eventEpoch: Number,
  receivedEpoch: Number,
});

const TemperatureSensorDatapoint = mongoose.model(
  "TemperatureSensorDatapoint",
  temperatureSensorDatapointSchema,
);

module.exports = TemperatureSensorDatapoint;
