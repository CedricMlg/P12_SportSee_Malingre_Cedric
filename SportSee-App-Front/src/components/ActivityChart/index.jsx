import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import FormatChartData from "../../services/FormatChartData";

/**
 * It takes in data, formats it, and then returns a bar chart with two bars, one for each data key.
 * @returns A React component.
 */
function ActivityChart(data) {
  const dataChart = new FormatChartData().activityFormattedData(data);
  return (
    <div className="activity-chart">
      <div className="activity-chart__text">
        <p>Activité quotidienne</p>
        <div className="activity-chart__legend">
          <div>
            <div
              className="activity-chart__legend-color"
              style={{ backgroundColor: "var(--secondary-color)" }}
            ></div>
            <p>Poids (kg)</p>
          </div>
          <div>
            <div
              className="activity-chart__legend-color"
              style={{ backgroundColor: "var(--primary-color)" }}
            ></div>
            <p>Calories brpulées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={dataChart}>
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis
            yAxisId="right"
            dataKey="kg"
            orientation="right"
            tickLine={false}
            axisLine={false}
          />
          <YAxis yAxisId="left" dataKey="kCal" orientation="left" hide />
          <Tooltip
            animationEasing="ease-out"
            content={<CustomTooltip payload={dataChart} />}
            offset={40}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            yAxisId="right"
            dataKey="kg"
            fill="var(--secondary-color)"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
          <Bar
            yAxisId="left"
            dataKey="kCal"
            fill="var(--primary-color)"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/**
 * If the data.payload[0] is undefined, return null. Otherwise, return a div with two p tags.
 * @returns A function that returns a component.
 */
function CustomTooltip(data) {
  if (data.payload[0] === undefined) {
    return null;
  }
  const tooltipData = data.payload[0].payload;

  return (
    <div className="activity-chart__tooltip">
      <p className="activity-chart__tooltip-text"> {`${tooltipData.kg}kg`}</p>
      <p className="activity-chart__tooltip-text">
        {" "}
        {`${tooltipData.kCal}Kcal`}
      </p>
    </div>
  );
}

export default ActivityChart;
