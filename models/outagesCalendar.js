const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const outagesCalendarSchema = new Schema({
  value: String,
  day: String,
});

const OutagesCalendar = mongoose.model(
  "OutagesCalendar",
  outagesCalendarSchema,
);

module.exports = OutagesCalendar;
