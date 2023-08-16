const express = require("express");
const router = express.Router();
const Dashboard = require("../../models/dashboard");

router.get("/dashboard/dashboard/:id", async (req, res) => {
  try {
    const dashboards = await Dashboard.find({ dashboardId: req.params.id });

    if (dashboards.length === 0) {
      const defaultLayout = {
        header: [],
        footer: [],
        leftSidebar: [],
        rightSidebar: [],
        innerHeader: [],
        innerFooter: [],
        innerLeftSidebar: [],
        innerRightSidebar: [],
        center: [],
      };
      res.status(200).json({ data: { customLayout: null, defaultLayout } });
      return;
    }

    const { customLayout, defaultLayout } = dashboards[0];

    const dashboard = {
      customLayout: customLayout ? JSON.parse(customLayout) : null,
      defaultLayout: JSON.parse(defaultLayout),
    };

    res.status(200).json({ data: dashboard });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/dashboard/saveDashboard", async (req, res) => {
  try {
    const { widgetId, dashboard } = req.body;
    const updatedDashboard = await Dashboard.findOneAndUpdate(
      { dashboardId: widgetId },
      { $set: { customLayout: JSON.stringify(dashboard) } },
      { new: true },
    );
    res.status(200).json({
      data: {
        dashboard: JSON.parse(updatedDashboard.customLayout),
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// JSON.stringify({
//   header: [
//     {
//       celId: "header1",
//       height: "25vh",
//       width: null,
//       defaultWidgetHeight: "25vh",
//       defaultWidgetWidth: null,
//       widgetIds: [
//         {
//           id: "2",
//           widgetType: "pie",
//         },
//         {
//           id: "10",
//           widgetType: "pie",
//         },
//       ],
//     },
//   ],
//   footer: [
//     {
//       celId: "footer1",
//       height: "25vh",
//       width: null,
//       defaultWidgetHeight: "25vh",
//       defaultWidgetWidth: null,
//       widgetIds: [
//         {
//           id: "1",
//           widgetType: "counter",
//         },
//         {
//           id: "2",
//           widgetType: "pie",
//         },
//       ],
//     },
//   ],
//   leftSidebar: [{
//     celId: "leftSidebar1",
//     height: "50vh",
//     width: {
//       xs: 3,
//     },
//     defaultWidgetHeight: "50vh",
//     defaultWidgetWidth: null,
//     widgetIds: [
//       {
//         id: "2",
//         widgetType: "pie",
//       },
//       {
//         id: "10",
//         widgetType: "pie",
//       },
//     ],
//   },],
//   rightSidebar: [{
//     celId: "rightSidebar1",
//     height: "50vh",
//     width: {
//       xs: 3,
//     },
//     defaultWidgetHeight: "50vh",
//     defaultWidgetWidth: null,
//     widgetIds: [
//       {
//         id: "10",
//         widgetType: "pie",
//       },
//       {
//         id: "2",
//         widgetType: "pie",
//       },
//     ],
//   },],
//   innerHeader: [ {
//     celId: "innerHeader1",
//     height: "35vh",
//     width: null,
//     defaultWidgetHeight: "25vh",
//     defaultWidgetWidth: null,
//     widgetIds: [
//       {
//         id: "2",
//         widgetType: "pie",
//       },
//       {
//         id: "10",
//         widgetType: "pie",
//       },
//     ],
//   },],
//   innerFooter: [{
//     celId: "innerFooter1",
//     height: "35vh",
//     width: null,
//     defaultWidgetHeight: "25vh",
//     defaultWidgetWidth: null,
//     widgetIds: [
//       {
//         id: "10",
//         widgetType: "pie",
//       },
//       {
//         id: "2",
//         widgetType: "pie",
//       },
     
//     ],
//   },],
//   innerLeftSidebar: [{
//     celId: "innerLeftSidebar1",
//     height: "50vh",
//     width: {
//       xs: 4,
//     },
//     defaultWidgetHeight: "50vh",
//     defaultWidgetWidth: null,
//     widgetIds: [
//       {
//         id: "2",
//         widgetType: "pie",
//       },
//       {
//         id: "10",
//         widgetType: "pie",
//       },
//     ],
//   },],
//   innerRightSidebar: [{
//     celId: "innerRightSidebar1",
//     height: "50vh",
//     width: {
//       xs: 4,
//     },
//     defaultWidgetHeight: "50vh",
//     defaultWidgetWidth: null,
//     widgetIds: [
//       {
//         id: "2",
//         widgetType: "pie",
//       },
//       {
//         id: "10",
//         widgetType: "pie",
//       },
//     ],
//   },],
//   center: [
//     {
//       celId: "center1",
//       height: "50vh",
//       width: {
//         xs: 4,
//       },
//       defaultWidgetHeight: "50vh",
//       defaultWidgetWidth: null,
//       widgetIds: [
//         {
//           id: "5",
//           widgetType: "line-chart",
//         },
//         {
//           id: "6",
//           widgetType: "line-chart",
//         },
//       ],
//     },
//   ],
// })

// JSON.stringify({
//   header: [
//     {
//       celId: "header1",
//       height: "25vh",
//       width: null,
//       defaultWidgetHeight: "25vh",
//       defaultWidgetWidth: null,
//       widgetIds: [],
//     },
//   ],
//   footer: [
//     {
//       celId: "footer1",
//       height: "25vh",
//       width: null,
//       defaultWidgetHeight: "25vh",
//       defaultWidgetWidth: null,
//       widgetIds: [],
//     },
//   ],
//   leftSidebar: [{
//     celId: "leftSidebar1",
//     height: "50vh",
//     width: {
//       lg: 3,
//     },
//     defaultWidgetHeight: "50vh",
//     defaultWidgetWidth: null,
//     widgetIds: [],
//   },],
//   rightSidebar: [{
//     celId: "rightSidebar1",
//     height: "50vh",
//     width: {
//       lg: 3,
//     },
//     defaultWidgetHeight: "50vh",
//     defaultWidgetWidth: null,
//     widgetIds: [],
//   },],
//   innerHeader: [ {
//     celId: "innerHeader1",
//     height: "35vh",
//     width: null,
//     defaultWidgetHeight: "25vh",
//     defaultWidgetWidth: null,
//     widgetIds: [],
//   },],
//   innerFooter: [{
//     celId: "innerFooter1",
//     height: "35vh",
//     width: null,
//     defaultWidgetHeight: "25vh",
//     defaultWidgetWidth: null,
//     widgetIds: [],
//   },],
//   innerLeftSidebar: [{
//     celId: "innerLeftSidebar1",
//     height: "50vh",
//     width: {
//       xl: 4,
//     },
//     defaultWidgetHeight: "50vh",
//     defaultWidgetWidth: null,
//     widgetIds: [],
//   },],
//   innerRightSidebar: [{
//     celId: "innerRightSidebar1",
//     height: "50vh",
//     width: {
//       xl: 4,
//     },
//     defaultWidgetHeight: "50vh",
//     defaultWidgetWidth: null,
//     widgetIds: [],
//   },],
//   center: [
//     {
//       celId: "center1",
//       height: "50vh",
//       width: {
//         xl: 4,
//       },
//       defaultWidgetHeight: "50vh",
//       defaultWidgetWidth: null,
//       widgetIds: [],
//     },
//   ],
// })