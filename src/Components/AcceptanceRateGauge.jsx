import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AcceptanceRateGauge = ({acceptance}) => {
  const acceptanceRate = acceptance || 0; // standardized variable name
  const remaining = 100 - acceptanceRate;

  const data = {
    labels: ['Acceptance Rate', 'Remaining'],
    datasets: [
      {
        data: [acceptanceRate, remaining],
        backgroundColor: ['#4caf50', '#e0e0e0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: `${(acceptanceRate ?? 0).toFixed(2)}%`,
        font: { size: 25 },
        padding: { top: 10, bottom: 30 },
      },
    },
    cutout: '40%',
  };

  return (
    <div className="w-40 mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default AcceptanceRateGauge;
