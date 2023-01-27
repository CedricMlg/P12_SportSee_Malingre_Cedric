import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function ActivityChart(data) {
  return (
    <div className="activity-chart">
      <p>Activité quotidienne</p>
      <BarChart width={730} height={250} data={data.props}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#82ca9d" />
        <Bar dataKey="calories" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default ActivityChart;
