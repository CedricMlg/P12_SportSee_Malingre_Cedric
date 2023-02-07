import React from "react";
import {
  Area,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import FormatChartData from "../../services/FormatChartData";

function AverageSessionChart(data) {
  const dataChart = new FormatChartData().AverageSessionFormattedData(data);
  return (
    <div className="line-chart">
      <p className="line-chart__text">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={dataChart}>
          <defs>
            <linearGradient id="colorMin" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--fifth-color)"
                stopOpacity={0.2}
              />
              <stop
                offset="100%"
                stopColor="var(--fifth-color)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis dataKey="min" hide />
          <Area
            type="monotone"
            dataKey="min"
            stroke="white"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorMin)"
          />

          <Tooltip
            animationEasing="ease-out"
            content={<CustomTooltip payload={dataChart} />}
            wrapperStyle={{ outline: "none" }}
          />
        </AreaChart>
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
    <div className="line-chart__tooltip">
      <p className="line-chart__tooltip-text"> {`${tooltipData.min} min`}</p>
    </div>
  );
}

export default AverageSessionChart;
