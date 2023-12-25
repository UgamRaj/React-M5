import React from "react";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Chart = ({ monthlyPay, dataVal }) => {
  // console.log(dataVal);
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of Principle and Interest ",
        width: "300",
        height: "300",
        data: [dataVal.homeValue, dataVal.interest],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="mainRight">
      <div className="chartRight">
        <h4>Monthly Payment: $ {monthlyPay}</h4>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Chart;
