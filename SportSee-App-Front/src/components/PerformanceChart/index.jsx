import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import FormatChartData from "../../services/FormatChartData";

function PerformanceChart(data) {
  const dataChart = new FormatChartData().PerformanceFormattedData(data);
  return (
    <div className="radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="58%" data={dataChart}>
          <PolarGrid stroke="white" radialLines={false} />
          <PolarAngleAxis dataKey="kind" />
          <Radar
            dataKey="value"
            fill="var(--primary-color)"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;
