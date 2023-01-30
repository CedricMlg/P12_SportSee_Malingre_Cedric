import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

function PerformanceChart(data) {
  const kind = data.props.kind;
  const performance = data.props.data;
  return (
    <div className="radar-chart">
      <RadarChart width={500} height={300} cx="50%" cy="50%" outerRadius="80%" data={performance}>
        {/* <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} /> */}
      </RadarChart>
    </div>
  );
}

export default PerformanceChart;