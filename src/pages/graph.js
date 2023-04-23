import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const testData = [
  { date: "2022-04-01", count: 1 },
  { date: "2022-04-07", count: 3 },
  { date: "2022-04-15", count: 2 },
  { date: "2022-04-20", count: 1 },
  { date: "2022-04-25", count: 3 },
  { date: "2022-04-30", count: 2 },
  // add more data here
];

const Graph = () => {
  const startDate = new Date("2022-04-01");
  const endDate = new Date("2023-04-30");

  return (
    <div style={{ marginTop: "0rem" }}>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={testData}
        showWeekdayLabels={true}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          const date = new Date(value.date);
          return {
            "data-tip": `${date.toISOString().slice(0, 10)} has count: ${
              value.count
            }`,
          };
        }}
        onClick={(value) => alert(`Clicked on value with count`)}
      />
    </div>
  );
};

export default Graph;
