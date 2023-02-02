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
      <p>Score</p>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={score}
            innerRadius={60}
            outerRadius={80}
            fill="white"
            dataKey="value"
          >
            <Cell fill="red" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p>
        {percent}% <span>de votre objectif</span>
      </p>
    </div>
  );
}

export default ScoreChart;
