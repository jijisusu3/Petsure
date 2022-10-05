import { Chart as ChartJS } from 'chart.js/auto';
// 버전 업글 이후 위에 것 사용 안해도 안 쓰면 오류남
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const CompareGraph = ({ sscore, pscore, cscore, mscore }) => {
  const data = {
    datasets: [
      {
        type: 'line',
        label: '슈어점수',
        borderColor: 'rgba(245, 134, 19, 0.8)',
        backgroundColor: 'rgba(245, 134, 19, 0.8)',
        borderWidth: 5,
        data: sscore,
        yAxisID: 'y_sub',
      },
      {
        type: 'bar',
        label: '보험사 신뢰등급',
        backgroundColor: 'rgba(146, 211, 245, 1)',
        borderColor: 'rgba(146, 211, 245, 1)',
        data: cscore,
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: '가격대비 보장점수',
        backgroundColor: 'rgba(192, 250, 124, 1)',
        data: pscore,
        yAxisID: 'y_sub',
        indexAxis: 'x',
      },
      {
        type: 'bar',
        label: '예상 적합도',
        backgroundColor: 'rgba(240, 182, 34, 1)',
        data: mscore,
        yAxisID: 'y_sub',
        indexAxis: 'x',
      },
    ],
  };
  const options = {
    categoryPercentage: 0.4,
    barPercentage: 0.5,
    maintainAspectRatio: false,
    spanGaps: true,
    maxBarThickness: 20,
    grouped: true,
    interaction: {
      mode: 'index',
    },
    plugins: {
      legend: {
        position: 'left',
        labels: {
          usePointStyle: true,
          padding: 24,
          font: {
            size: 18,
            weight: 400,
            family: 'Pretendard',
          },
        },
      },
      tooltip: false,
    },
    scales: {
      x: {
        ticks: {
          callback: () => '',
        },
      },
      y: [
        {
          ticks: {
            display: false,
            font: {
              size: 20,
            },
          },
        },
      ],
      y_sub: {
        position: 'right',
        labels: {
          font: {
            size: 24,
          },
        },
        ticks: {
          display: false,
        },
      },
    },
  };
  return (
    <div style={{ marginLeft: 30, width: 910, height: 280 }}>
      <Line type="line" data={data} options={options} width={700} height={500} />
    </div>
  );
};
export default CompareGraph;
