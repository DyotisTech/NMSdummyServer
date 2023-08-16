const mongoose = require("mongoose");
const schema = mongoose.Schema;

const sensorSchema = new schema({
  id: Number,
  asset: String,
  provisioningId: String,
  sensorType: String,
  sensorCode: String,
  sensorStatus: Number,
  sensorStatusName: String,
  sensorURL: String,
  params: String,
  updateEpoch: Number,
  updateInterval: Number,
  xcoordinate: Number,
  ycoordinate: Number,
});

const Sensor = mongoose.model("Sensor", sensorSchema);

module.exports = Sensor;