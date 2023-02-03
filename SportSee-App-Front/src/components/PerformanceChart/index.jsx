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
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="58%" data={performance}>
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
