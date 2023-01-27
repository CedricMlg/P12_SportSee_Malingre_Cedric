import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

function AverageSessionChart(data) {
  return (
    <div className="line-chart">
        <p>Durée moyenne des sessions</p>
      <LineChart width={500} height={300} data={data.props}>
        <XAxis />
        <YAxis dataKey="day" />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default AverageSessionChart;
