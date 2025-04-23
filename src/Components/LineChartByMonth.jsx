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

const LineChartByMonth = ({ submissionCalendar }) => {
  const demo = { "1716854400": 1 };
  const rawData = submissionCalendar || demo;

  // Extract dates from data
  const dateList = Object.keys(rawData).map(ts => new Date(ts * 1000));
  const yearMonthSet = new Set(dateList.map(d => `${d.getFullYear()}-${d.getMonth()}`));
  const allOptions = Array.from(yearMonthSet).sort().map(str => {
    const [year, month] = str.split('-');
    return {
      year: Number(year),
      month: Number(month),
    };
  });

  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState(0);

  // Filter entries for selected year & month
  const dailyData = {};
  Object.entries(rawData).forEach(([ts, count]) => {
    const date = new Date(ts * 1000);
    if (date.getFullYear() === selectedYear && date.getMonth() === selectedMonth) {
      const day = date.getDate();
      dailyData[day] = (dailyData[day] || 0) + count;
    }
  });

  const maxDays = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const labels = Array.from({ length: maxDays }, (_, i) => i + 1);
  const chartData = labels.map(day => dailyData[day] || 0);

  const data = {
    labels,
    datasets: [
      {
        label: `Daily Submissions (${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')})`,
        data: chartData,
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
        text: 'Daily Submission Activity',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day of Month',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Submissions',
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex gap-4">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="text-white p-2"
        >
          {Array.from({ length: 8 }, (_, i) => 2020 + i).map(year => (
            <option key={year} value={year} className='text-black'>{year}</option>
          ))}
        </select>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          className="text-white p-2"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <option key={i} value={i} className='text-black'>
              {new Date(0, i).toLocaleString('default', { month: 'short' })}
            </option>
          ))}
        </select>
      </div>

      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartByMonth;
