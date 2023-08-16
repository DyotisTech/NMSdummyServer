const Asset = require("./models/asset");
const assetList = require("./data/assetList");
const AssetCount = require("./models/assetCount");
const assetCount = require("./data/assetCount");
const AssetTree = require("./models/assetTree");
const assetTree = require("./data/assetTree");
const AssetSummaryAll = require("./models/assetSummaryAll");
const assetSummaryAll = require("./data/assetSummaryAll");
const Sensor = require("./models/sensor");
const sensorList = require("./data/sensorList");
const TemperatureSensorDatapoint = require("./models/temperatureSensorDatapoint");
const temperatureSensor = require("./data/temperatureSensor");
const AssetSensor = require("./models/assetSensor");
const assetSensorList = require("./data/assetSensorList");
const HumiditySensorDatapoint = require("./models/humiditySensorDatapoint");
const humiditySensor = require("./data/humiditySensor");
const GasSensorDatapoint = require("./models/gasSensorDatapoint");
const gasSensor = require("./data/gasSensor");
const DustSensorDatapoint = require("./models/dustSensorDatapoint");
const dustSensor = require("./data/dustSensor");
const Category = require("./models/category");
const categoryList = require("./data/categoryList");
const User = require("./models/user");
const user = require("./data/user");
const WidgetId = require("./models/widgetId");
const widgetList = require("./data/widgetList");
const Widget = require("./models/widget");
const widgets = require("./data/widgets");
const ActiveAlertsSummary = require("./models/activeAlertsSummary");
const activeAlertsSummary = require("./data/activeAlertsSummary");
const ActiveAlert = require("./models/activeAlert");
const activeAlertsList = require("./data/activeAlertsList");
const Dashboard = require("./models/dashboard");
const dashboards = require("./data/dashboards");
const OutagesCalendar = require("./models/outagesCalendar");
const outageSummary = require("./data/outageSummary");
const MemoryConsumed = require("./models/memoryConsumed");
const memoryConsumed = require("./data/memoryConsumed");
const Location = require("./models/location");
const locations = require("./data/locations");

function seedDB() {
  Asset.insertMany(assetList)
    .then(() => {
      console.log("Database seeded with asset list");
      return AssetCount.create(assetCount);
    })
    .then(() => {
      console.log("Database seeded with asset count");
      return AssetTree.insertMany(assetTree);
    })
    .then(() => {
      console.log("Database seeded with asset tree");
      return AssetSummaryAll.insertMany(assetSummaryAll);
    })
    .then(() => {
      console.log("Database seeded with asset summary all");
      return Sensor.insertMany(sensorList);
    })
    .then(() => {
      console.log("Database seeded with sensor list");
      return AssetSensor.insertMany(assetSensorList);
    })
    .then(() => {
      console.log("Database seeded with asset sensor list");
      return TemperatureSensorDatapoint.insertMany(temperatureSensor);
    })
    .then(() => {
      console.log("Database seeded with temperature sensor data points");
      return HumiditySensorDatapoint.insertMany(humiditySensor);
    })
    .then(() => {
      console.log("Database seeded with humidity sensor data points");
      return GasSensorDatapoint.insertMany(gasSensor);
    })
    .then(() => {
      console.log("Database seeded with gas sensor data points");
      return DustSensorDatapoint.insertMany(dustSensor);
    })
    .then(() => {
      console.log("Database seeded with dust sensor data points");
      return Category.insertMany(categoryList);
    })
    .then(() => {
      console.log("Database seeded with category list");
      return User.create(user);
    })
    .then(() => {
      console.log("Database seeded with user");
      return WidgetId.insertMany(widgetList);
    })
    .then(() => {
      console.log("Database seeded with widget list");
      return Widget.insertMany(widgets);
    })
    .then(() => {
      console.log("Database seeded with widgets");
      return ActiveAlertsSummary.insertMany(activeAlertsSummary);
    })
    .then(() => {
      console.log("Database seeded with active alerts summary");
      return ActiveAlert.insertMany(activeAlertsList);
    })
    .then(() => {
      console.log("Database seeded with active alerts list");
      return Dashboard.insertMany(dashboards);
    })
    .then(() => {
      console.log("Database seeded with dashboards");
      return OutagesCalendar.insertMany(outageSummary);
    })
    .then(() => {
      console.log("Database seeded with outage summary");
      return MemoryConsumed.insertMany(memoryConsumed);
    })
    .then(() => {
      console.log("Database seeded with memory consumed");
      return Location.insertMany(locations);
    })
    .then(() => console.log("Database seeded with locations"))
    .catch((err) => console.log(err));
}

module.exports = seedDB;
