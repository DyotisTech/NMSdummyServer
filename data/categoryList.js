const categoryList = [
  {
    code: "IP6LP",
    description: "6 Line IP Phone",
    managementURL: "https://{{ipAddress}}/fcgi/do?id=1",
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "ICC4",
    description: "Media Gateway - ICC3",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: true,
    imageName: "icc4.png",
    height: 370,
    width: 840,
    actions: [],
  },
  {
    code: "IMSI",
    description: "UE",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [
      {
        actionName: "Factory Reset",
        apiURL: "${{baseURL}}api/v2/device/action/reset/{id}",
      },
      {
        actionName: "Clear Data",
        apiURL: "${{baseURL}}api/v2/device/action/clearData/{id}",
      },
    ],
  },
  {
    code: "ICC3",
    description: "Media Gateway - ICC3",
    managementURL: null,
    hasManagementInterface: true,
    hasSelfDashboard: true,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "Rover",
    description: "Rover",
    managementURL: null,
    hasManagementInterface: true,
    hasSelfDashboard: true,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "PC",
    description: "User PC",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: true,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "LAPTOP",
    description: "Laptop",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "CALL-SERVER",
    description: "Call Server",
    managementURL: null,
    hasManagementInterface: true,
    hasSelfDashboard: true,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "Server",
    description: "Application Server",
    managementURL: null,
    hasManagementInterface: true,
    hasSelfDashboard: true,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "un-identified",
    description: "Un Identified",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "IP2LP",
    description: "2 Line IP Phone ",
    managementURL: "http://{{ipAddres}}/admin",
    hasManagementInterface: true,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "VIP",
    description: "Video IP Phone",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "AHD",
    description: "Audio Help Desk",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "VHD",
    description: "Video Help Desk",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "IP2LG",
    description: "IP 2 Line Phone (Gigabit)",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "GW",
    description: "Network Gateway",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "L3",
    description: "Layer3 Switch",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "L2",
    description: "Layer2 Switch",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "FEATURE-SERVER",
    description: "Feature Server",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
  {
    code: "TRUNK-GATEWAY",
    description: "Trunk Gateway",
    managementURL: null,
    hasManagementInterface: false,
    hasSelfDashboard: false,
    imageName: null,
    height: null,
    width: null,
    actions: [],
  },
];

module.exports = categoryList;
