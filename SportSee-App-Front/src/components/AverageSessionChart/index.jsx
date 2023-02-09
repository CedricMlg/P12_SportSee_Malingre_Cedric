import React from "react";
import {
  LineChart,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import FormatChartData from "../../services/FormatChartData";

/**
 * It's a function that returns a div that contains a ResponsiveContainer that contains a LineChart
 * that contains a defs that contains a linearGradient that contains two stops that contains a XAxis
 * that contains a YAxis that contains a Line that contains a Tooltip that contains a CustomTooltip
 * that contains a Tooltip.
 * @returns A React component.
 */
function AverageSessionChart(data) {
  const dataChart = new FormatChartData().AverageSessionFormattedData(data);
  return (
    <div className="line-chart">
      <p className="line-chart__text">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={dataChart}>
          <defs>
            <linearGradient id="lineColor" x1="0" y1="1" x2="1" y2="1">
              <stop offset="20%" stopColor="#FFFFFF" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis dataKey="min" hide />
          <Line
            type="monotone"
            dataKey="min"
            strokeWidth={2}
            stroke="url(#lineColor)"
            dot={false}
          />
          <Tooltip
            animationEasing="ease-out"
            content={<CustomTooltip payload={dataChart} />}
            wrapperStyle={{ outline: "none" }}
          />
          <Tooltip offset={100} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

/**
 * If the data is undefined, return null. Otherwise, return a div with a paragraph inside.
 * @returns A function that returns a component.
 */
function CustomTooltip(data) {
  if (data.payload[0] === undefined) {
    return null;
  }
  const tooltipData = data.payload[0].payload;

  return (
    <div className="line-chart__tooltip">
      <p className="line-chart__tooltip-text"> {`${tooltipData.min} min`}</p>
    </div>
  );
}

export default AverageSessionChart;
