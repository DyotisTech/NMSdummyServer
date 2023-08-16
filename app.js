require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const assetListApi = require("./apis/assetApis/assetList");
const assetCountApi = require("./apis/assetApis/assetCount");
const assetTreeApi = require("./apis/assetApis/assetTree");
const assetSummaryAllApi = require("./apis/assetApis/assetSummaryAll");
const sensorListApi = require("./apis/sensorApis/sensorList");
const assetSensorListApi = require("./apis/sensorApis/assetSensorList");
const temperatureSensorDatapointsApi = require("./apis/sensorApis/temperatureSensor");
const humiditySensorDatapointsApi = require("./apis/sensorApis/humiditySensor");
const gasSensorDatapointsApi = require("./apis/sensorApis/gasSensor");
const dustSensorDatapointsApi = require("./apis/sensorApis/dustSensor");
const categoryListApi = require("./apis/categoryApis/categoryList");
const userApi = require("./apis/dashboardApis/user");
const widgetListApi = require("./apis/dashboardApis/widgetList");
const widgetApi = require("./apis/dashboardApis/widget");
const activeAlertsSummaryApi = require("./apis/alertApis/activeAlertsSummary");
const activeAlertsListApi = require("./apis/alertApis/activeAlertsList");
const dashboardApi = require("./apis/dashboardApis/dashboard");
const outagesSummaryApi = require("./apis/outages/outagesCalendar");
const memoryConsumedApi = require("./apis/memoryApis/memoryConsumed");
const locationsApi = require("./apis/dashboardApis/locations");
const seedDB = require("./seedDB");

const dbURL = process.env.DB_URL || "mongodb://127.0.0.1:27017/nmsDB";
mongoose
  .connect(dbURL)
  .then(() => console.log("Connected to NMS database"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// seedDB();

app.use(assetListApi);
app.use(assetCountApi);
app.use(assetTreeApi);
app.use(assetSummaryAllApi);
app.use(sensorListApi);
app.use(assetSensorListApi);
app.use(temperatureSensorDatapointsApi);
app.use(humiditySensorDatapointsApi);
app.use(gasSensorDatapointsApi);
app.use(dustSensorDatapointsApi);
app.use(categoryListApi);
app.use(userApi);
app.use(widgetListApi);
app.use(widgetApi);
app.use(activeAlertsSummaryApi);
app.use(activeAlertsListApi);
app.use(dashboardApi);
app.use(outagesSummaryApi);
app.use(memoryConsumedApi);
app.use(locationsApi);

const port = process.env.PORT || 8000;
app.listen(8000, () => console.log(`Server running on port ${port}`));
