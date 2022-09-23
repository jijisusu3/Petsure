import React from 'react';
import { Radar } from 'react-chartjs-2';
import classes from './InsureCoverage.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [12, 10, 0, 15, 20],
    },
  ],
};

export function InsureCoverage() {
  return (
    <div className={classes.InsureCoverage}>
      <Radar data={data} />
    </div>
  );
}
