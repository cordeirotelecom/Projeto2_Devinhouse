import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ title, legend, dataX, dataY }) => {

  const data = {
    labels: dataX,
    datasets: [
      {
        label: legend,
        data: dataY,
        fill: false,
        backgroundColor: '#0b1a72',
        borderColor: '#0b1a72',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [{ ticks: { beginAtZero: true, }, },],
    },
    //maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom', display: false },
    },
  };


  return (
    <>
      <p>{title}</p>
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart