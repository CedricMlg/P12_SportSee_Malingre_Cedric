import React from "react";
import { PieChart, Pie, Cell } from "recharts";

function ScoreChart(data) {
  const percent = data.props.todayScore * 100;
  const missingPercent = 100 - percent;
  const score = [{ value: percent }, { value: missingPercent }];
  return (
    <div className="radial-chart">
      <p>Score</p>
      <PieChart width={800} height={400}>
        <Pie
          data={score}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="white"
          dataKey="value"
        >
          <Cell fill="red" />
        </Pie>
      </PieChart>
      <p>
        {percent}% <span>de votre objectif</span>
      </p>
    </div>
  );
}

export default ScoreChart;
