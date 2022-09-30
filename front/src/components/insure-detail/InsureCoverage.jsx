import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import classes from './InsureCoverage.module.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const data = {
  labels: ['수술비치료', '슬관절', '피부병', '구강', '비뇨기'],
  datasets: [
    {
      label: '보험이름',
      data: [95, 82.3, 87.3, 89.22, 88.44],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: '보험평균',
      data: [93.24, 85.32, 83.31, 85.12, 83.12],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export function InsureCoverage() {
  return (
    <div className={classes.radarInsure}>
      <Radar data={data} />
    </div>
  );
}
