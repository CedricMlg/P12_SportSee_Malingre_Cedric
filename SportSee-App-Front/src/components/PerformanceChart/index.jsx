import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function PerformanceChart(data) {
  const kind = data.props.kind;
  const dataPerf = data.props.data;
  const performance = [];
  dataPerf.map((perf) =>
    performance.push({
      value: perf.value,
      kind: perf.kind.toString().replace(perf.kind, kind[perf.kind]),
    })
  );
  return (
    <div className="radar-chart">
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;
