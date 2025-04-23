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

const LineChartForBoth = ({ submission1, submission2 ,user1, user2 }) => {
  const [selectedYear, setSelectedYear] = useState(2025);

  const demo = { "1397088000": 1 };

  const processData = (submission) => {
    const rawData = submission || demo;

    const filteredEntries = Object.entries(rawData).filter(([ts]) => {
      const date = new Date(ts * 1000);
      return date.getFullYear() === selectedYear;
    });

    const monthMap = Array(12).fill(0);
    filteredEntries.forEach(([ts, value]) => {
      const date = new Date(ts * 1000);
      const month = date.getMonth();
      monthMap[month] += value;
    });

    return monthMap;
  };

  const user1Data = processData(submission1);
  const user2Data = processData(submission2);

  const monthLabels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: `${user1 || "User 1"} Submissions in ${selectedYear}`,
        data: user1Data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: `${user2 || "User 1"} Submissions in ${selectedYear}`,
        data: user2Data,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Important for better mobile flexibility
    plugins: {
      title: {
        display: true,
        text: `Monthly Submission Activity Comparison in ${selectedYear}`,
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
    <div className="px-2 sm:px-4 md:px-8">
      <div className="mb-4">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="text-white bg-gray-700 px-2 py-1 rounded"
        >
          {[2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027].map((year) => (
            <option key={year} value={year} className="text-black">
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Responsive Chart Container */}
      <div className="w-full overflow-x-auto">
        <div style={{ minWidth: '600px', height: '400px' }}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LineChartForBoth;
