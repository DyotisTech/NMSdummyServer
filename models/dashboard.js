const mongoose = require("mongoose");
const schema = mongoose.Schema;

const dashboardSchema = new schema({
  dashboardId: String,
  customLayout: String,
  defaultLayout: String,
});

const Dashboard = mongoose.model("Dashboard", dashboardSchema);

module.exports = Dashboard;
