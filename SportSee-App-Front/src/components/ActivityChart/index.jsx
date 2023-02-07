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

function ActivityChart(data) {
  const dataChart = new FormatChartData().ActivityFormattedData(data);
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
            dataKey="kg"
            orientation="right"
            tickLine={false}
            axisLine={false}
          />
          <YAxis dataKey="kCal" orientation="left" />
          <Tooltip
            animationEasing="ease-out"
            content={<CustomTooltip payload={dataChart} />}
            offset={40}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            dataKey="kg"
            fill="var(--secondary-color)"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
          <Bar
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
