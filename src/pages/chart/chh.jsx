import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Class strength',
      backgroundColor: 'rgba(219, 79, 142, 0.77)',
      borderColor: 'rgba(219, 79, 79, 0.77)',
      borderWidth: 1,
      data: [38, 47, 19, 20, 40, 50, 39],
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Class strength',
      fontSize: 20,
    },
    legend: {
      display: true,
      position: 'right',
    },
  },
};

const chart =()=> {
  return (
    <div style={{width:930,height:355,margin:'0 auto'}}>
      <Bar data={data} options={options} />
    </div>
  );
};
export default chart;