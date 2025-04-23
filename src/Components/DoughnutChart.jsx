import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ easySolvedQues, medSolvedQues, hardSolvedQues }) => {
  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Questions",
        data: [
          easySolvedQues ? easySolvedQues : 1,
          medSolvedQues ? medSolvedQues : 1,
          hardSolvedQues ? hardSolvedQues : 1,
        ], // Replace with your dynamic values
        backgroundColor: ["#2c6a3b", "#b48c4e", "#9f4b4b"],
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="w-65 mx-auto">
      <h2 className="text-xl font-semibold text-center mb-4 text-white">
        Difficulty Breakdown
      </h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
