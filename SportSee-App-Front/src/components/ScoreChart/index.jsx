import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

function ScoreChart(data) {
  // console.log(data.props);
  return (
    <div className="radial-chart">
      <p>Score</p>
      <p>{data.props.todayScore * 100}% de votre objectif</p>
    </div>
  );
}

export default ScoreChart;
