import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

function RadialChart(data) {
  console.log(data.props);
  return (
    <div className="radial-chart">
      <p>Score</p>
      <RadialBarChart
        width={500}
        height={300}
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data.props}
      >
        <RadialBar
          clockWise
          dataKey="todayScore"
        />
        <Legend />
      </RadialBarChart>
      <p>{data.props.todayScore*100}% de votre objectif</p>
    </div>
  );
}

export default RadialChart;
