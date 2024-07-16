// src/components/WeeklyProfitChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'M', sales: 40, revenue: 24 },
  { name: 'T', sales: 30, revenue: 13 },
  { name: 'W', sales: 20, revenue: 98 },
  { name: 'T', sales: 27, revenue: 39 },
  { name: 'F', sales: 18, revenue: 48 },
  { name: 'S', sales: 23, revenue: 38 },
  { name: 'S', sales: 34, revenue: 43 },
];

const WeeklyProfitChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="text-gray-500 mb-4">Profit this week</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyProfitChart;
