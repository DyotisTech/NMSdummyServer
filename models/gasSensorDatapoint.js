const mongoose = require("mongoose");
const schema = mongoose.Schema;

const gasSensorDatapointSchema = new schema({
  attributeName: String,
  attributeValue: String,
  eventEpoch: Number,
  receivedEpoch: Number,
});

const GasSensorDatapoint = mongoose.model(
  "GasSensorDatapoint",
  gasSensorDatapointSchema,
);

module.exports = GasSensorDatapoint;
