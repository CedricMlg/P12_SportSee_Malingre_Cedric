import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function ScoreChart(data) {
  const userData = data.props;
  if (userData.todayScore === undefined) {
    userData.todayScore = userData.score;
    delete userData.score;
  }
  const percent = userData.todayScore * 100;
  const missingPercent = 100 - percent;
  const score = [{ value: percent }, { value: missingPercent }];
  return (
    <div className="pie-chart">
      <p className="pie-chart__text">Score</p>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={score}
            innerRadius={69}
            outerRadius={80}
            fill="transparent"
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            <Cell cornerRadius={10} fill="var(--primary-color)" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className="pie-chart__percentage">
        {percent}% <span>de votre objectif</span>
      </p>
    </div>
  );
}

export default ScoreChart;
