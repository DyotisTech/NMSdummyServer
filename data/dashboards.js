const dashboard = [
  {
    dashboardId: 0,
    customLayout: null,
    defaultLayout: JSON.stringify({
      header: [
        {
          celId: "header1",
          height: "25vh",
          width: null,
          defaultWidgetHeight: "25vh",
          defaultWidgetWidth: null,
          widgetIds: [
            {
              id: "2",
              widgetType: "pie",
            },
            {
              id: "10",
              widgetType: "pie",
            },
          ],
        },
      ],
      footer: [
        {
          celId: "footer1",
          height: "25vh",
          width: null,
          defaultWidgetHeight: "25vh",
          defaultWidgetWidth: null,
          widgetIds: [
            {
              id: "14",
              widgetType: "table",
            },
          ],
        },
      ],
      leftSidebar: [],
      rightSidebar: [],
      innerHeader: [],
      innerFooter: [],
      innerLeftSidebar: [],
      innerRightSidebar: [],
      center: [
        {
          celId: "center1",
          height: "50vh",
          width: {
            xs: 12,
          },
          defaultWidgetHeight: "50vh",
          defaultWidgetWidth: null,
          widgetIds: [
            {
              id: "13",
              widgetType: "graph-topology",
            },
          ],
        },
      ],
    }),
  },
];

module.exports = dashboard;
