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
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        data: sscore,
        yAxisID: 'y_sub',
      },
      {
        type: 'bar',
        label: '보험사 신뢰등급',
        backgroundColor: 'rgb(255, 99, 132)',
        data: cscore,
        borderColor: 'red',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: '가격대비 보장점수',
        backgroundColor: 'rgb(75, 192, 192)',
        data: pscore,
        yAxisID: 'y_sub',
        indexAxis: 'x',
      },
      {
        type: 'bar',
        label: '예상 적합도',
        backgroundColor: 'rgb(175, 192, 192)',
        data: mscore,
        yAxisID: 'y_sub',
        indexAxis: 'x',
      },
    ],
  };
  const options = {
    spanGaps: true,
    maxBarThickness: 30,
    grouped: true,
    interaction: {
      mode: 'index',
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          padding: 10,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(124, 35, 35, 0.4)',
        padding: 10,
        bodySpacing: 5,
        usePointStyle: true,
        filter: item => item.parsed.y !== null,
        callbacks: {
          title: context => context[0].label,
          label: context => {
            let label = context.dataset.label + '' || '';

            return context.parsed.y !== null ? label + ': ' + context.parsed.y : null;
          },
        },
      },
    },
    scales: {
      y: [
        {
          ticks: {
            display: false,
          },
        },
      ],
      y_sub: {
        position: 'right',
        ticks: {
          display: false,
        },
      },
    },
  };
  return (
    <div>
      <Line type="line" data={data} options={options} />
    </div>
  );
};
export default CompareGraph;
