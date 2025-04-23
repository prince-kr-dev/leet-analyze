import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const CoverageRadar = ({
  easySolvedQues,
  medSolvedQues,
  hardSolvedQues,
  totalEasyQues,
  totalMedQues,
  totalHardQues,
}) => {
  const easySolved = easySolvedQues ? easySolvedQues : 15;
  const totalEasy = totalEasyQues;
  const mediumSolved = medSolvedQues ? medSolvedQues : 28;
  const totalMedium = totalMedQues;
  const hardSolved = hardSolvedQues ? hardSolvedQues : 16;
  const totalHard = totalHardQues;

  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Completion % by Difficulty",
        data: [
          ((easySolved / totalEasy) * 100).toFixed(2),
          ((mediumSolved / totalMedium) * 100).toFixed(2),
          ((hardSolved / totalHard) * 100).toFixed(2),
        ],
        backgroundColor: "rgba(54, 162, 235, 0.1)", // softer fill for dark bg
        borderColor: "rgba(54, 162, 235, 1)", // strong border
        pointBackgroundColor: "#fff", // stands out against dark background
        pointBorderColor: "rgba(54, 162, 235, 1)",
        pointHoverBackgroundColor: "rgb(54, 192, 235)",
        pointHoverBorderColor: "#fff",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: "rgba(255, 255, 255, 0.3)", // whiter radial lines
        },
        suggestedMin: 0,
        suggestedMax: 3,
        ticks: {
          display: false,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.15)", // whiter grid lines
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="w-75 mx-auto">
      <Radar data={data} options={options} />
    </div>
  );
};

export default CoverageRadar;
