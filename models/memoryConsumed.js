const mongoose = require("mongoose");
const schema = mongoose.Schema;

const memoryConsumedSchema = new schema({
  attributeName: String,
  attributeValue: String,
  eventEpoch: Number,
  receivedEpoch: Number,
});

const MemoryConsumed = mongoose.model("MemoryConsumed", memoryConsumedSchema);

module.exports = MemoryConsumed;
