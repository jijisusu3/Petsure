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
import { useLocation } from 'react-router-dom';

import classes from './InsureCoverage.module.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export function InsureCoverage() {
  const location = useLocation();
  let sergeryCost = 0;
  let kneeJoint = 0;
  let skinDisease = 0;
  let mouthDisease = 0;
  let urinarySystem = 0;

  location.state.data.basic.map(basicGuarantee => {
    if (basicGuarantee.cover_type == 3) {
      sergeryCost = basicGuarantee.price / 1.9;
    } else if (basicGuarantee.cover_type == 4) {
      kneeJoint = basicGuarantee.price / 1.1;
    } else if (basicGuarantee.cover_type == 5) {
      skinDisease = basicGuarantee.price * 1.8;
    } else if (basicGuarantee.cover_type == 6) {
      mouthDisease = basicGuarantee.price / 1.7;
    } else if (basicGuarantee.cover_type == 7) {
      urinarySystem = basicGuarantee.price / 1.9;
    }
  });

  location.state.data.special.map(specialGuarantee => {
    if (specialGuarantee.cover_type == 3) {
      sergeryCost = specialGuarantee.price / 1.9;
    } else if (specialGuarantee.cover_type == 4) {
      kneeJoint = specialGuarantee.price / 1.1;
    } else if (specialGuarantee.cover_type == 5) {
      skinDisease = specialGuarantee.price * 1.8;
    } else if (specialGuarantee.cover_type == 6) {
      mouthDisease = specialGuarantee.price / 1.7;
    } else if (specialGuarantee.cover_type == 7) {
      urinarySystem = specialGuarantee.price / 1.9;
    }
  });
  const arr = [
    { guarantee: '수술치료비', cost: sergeryCost },
    { guarantee: '슬관절', cost: kneeJoint },
    { guarantee: '피부병', cost: skinDisease },
    { guarantee: '구강', cost: mouthDisease },
    { guarantee: '비뇨기', cost: urinarySystem },
  ];
  const maxVal = Math.max(sergeryCost, kneeJoint, skinDisease, mouthDisease, urinarySystem);
  const maxIdx = arr.findIndex(i => i.cost == maxVal);
  const maxGua = arr[maxIdx].guarantee;
  const data = {
    labels: ['수술치료비', '슬관절', '피부병', '구강', '비뇨기'],
    datasets: [
      {
        label: location.state.data.insurance.insurance_name,
        data: [sergeryCost, kneeJoint, skinDisease, mouthDisease, urinarySystem],
        backgroundColor: 'rgba(245, 134, 19, 0.5)',
        borderColor: 'rgba(245, 134, 19, 1)',
        borderWidth: 1,
      },
      {
        label: '보험평균',
        data: [125, 122.51, 123.75, 125, 127.82],
        backgroundColor: 'rgba(240, 182, 34, 0.2)',
        borderColor: 'rgba(240, 182, 34, 1)',
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 22,
            weight: 'bold',
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 20,
            weight: 'bold',
          },
        },
      },
    },
  };
  return (
    <div className={classes.radarBox}>
      <p className={classes.fontFirst}>주력하고 있는 보장 상품</p>
      <p className={classes.fontSecond}>
        이 상품은 <span style={{ color: '#F58613' }}>{maxGua}</span>에 집중되어있어요! 👀
      </p>
      <div className={classes.radarInsure}>
        <Radar data={data} options={options} />
      </div>
    </div>
  );
}
