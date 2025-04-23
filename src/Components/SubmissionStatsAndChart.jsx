import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({submission}) => {
  const [selectedYear, setSelectedYear] = useState(2025); // Default selected year

  const demo={ "1397088000": 1,}
  const rawData = submission || demo;

  // Filter entries by selected year
  const filteredEntries = Object.entries(rawData).filter(([ts]) => {
    const date = new Date(ts * 1000);
    return date.getFullYear() === selectedYear;
  });

  // Convert and group values by month
  const monthMap = Array(12).fill(0); // Jan (0) to Dec (11)
  filteredEntries.forEach(([ts, value]) => {
    const date = new Date(ts * 1000);
    const month = date.getMonth();
    monthMap[month] += value;
  });

  const monthLabels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: `Monthly Submissions in ${selectedYear}`,
        data: monthMap,
        borderColor: 'rgba(75, 192, 92, 1)',
        backgroundColor: 'rgba(75, 192, 92, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Monthly Submission Activity in ${selectedYear}`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Submissions',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div className="mb-4">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className='text-white'
        >
          {[2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027].map((year) => (
            <option key={year} value={year} className='text-black'>
              {year}
            </option>
          ))}
        </select>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
