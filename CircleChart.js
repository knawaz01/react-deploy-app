import React from "react";
import { Chart } from "react-google-charts";
import "../components/CircleChart.css"

export const data = [
  ["Task", "Hours per Day"],
  [" Work", 4],
  ["Eat", 6],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  pieHole: 0.6,
  is3D: false,
  colors:["red","blue","gray"],
  pieSliceText: "none",
  legend: "none",
  chartArea: { width: "80%", height: "80%" },
};

export default function CircleChart() {
  return (
    <div className="circle-chart-container">
    <Chart
      chartType="PieChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
    <div className="pie-hole-per">65%</div>
    <div className="pie-hole-label">Total New <br></br>Customer</div>
    </div>
  );
}
