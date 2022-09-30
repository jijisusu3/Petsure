import React from 'react';
import HorizonLine from '../common/HorizontalLine';
import { InsureCoverage } from './InsureCoverage';
import { useLocation } from 'react-router-dom';
import { InsureAccordion } from './InsureAccordion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function WeSure() {
  const location = useLocation();

  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: [40, 30, 30],
        backgroundColor: ['#353AE8', '#7736EA', '#03267A'],
        borderWidth: 1.5,
      },
    ],
  };

  return (
    <>
      <h3>We SURE do!</h3>
      <HorizonLine />
      <h5>유저 보험 평가</h5>
      <h1>다른 사람들은 이 보험을 추천해요</h1>
      <Pie data={data} />
      <div>
        <h5>보험에서 빠진 약관 영양제로 보충</h5>
        <h1>이 보험에서 빠진 피부 관련 제품은 어떠세요?</h1>
      </div>
    </>
  );
}
