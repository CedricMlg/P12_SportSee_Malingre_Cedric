import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import FormatChartData from "../../services/FormatChartData";

/**
 * It takes in a data object, formats it, and then returns a pie chart.
 * @returns A React component.
 */
function ScoreChart(data) {
  const dataChart = new FormatChartData().scoreFormattedData(data);
  return (
    <div className="pie-chart">
      <p className="pie-chart__text">Score</p>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={dataChart}
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
        {dataChart[0].value}% <span>de votre objectif</span>
      </p>
    </div>
  );
}

export default ScoreChart;
