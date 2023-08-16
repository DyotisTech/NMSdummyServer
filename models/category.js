const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categorySchema = new schema({
  code: String,
  description: String,
  managementURL: String,
  hasManagementInterface: Boolean,
  hasSelfDashboard: Boolean,
  imageName: String,
  height: Number,
  width: Number,
  actions: Array,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
