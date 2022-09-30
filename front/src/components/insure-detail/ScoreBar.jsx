import { Chart as ChartJS } from 'chart.js/auto';
// 버전 업글 이후 위에 것 사용 안해도 안 쓰면 오류남
import classes from './ScoreBar.module.css';
import { Line } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [
        { x: 96.53, y: '보험사 신뢰등급' },
        { x: 92.34, y: '안심 보장 점수' },
        { x: 95.23, y: '예상 적합도' },
      ],
      yAxisID: 'x_sub',
      indexAxis: 'y',
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
  },
  scales: {
    y: {
      afterTickToLabelConversion: function (scaleInstance) {
        const ticks = scaleInstance.ticks;

        const newTicks = ticks.map(tick => {
          return {
            ...tick,
          };
        });

        scaleInstance.ticks = newTicks;
      },
      grid: {
        display: false,
        drawTicks: true,
        tickLength: 4,
        color: '#E2E2E230',
      },
    },
  },
};

const ScoreBar = () => {
  return (
    <div className={classes.scoreBar}>
      <Line type="line" data={data} options={options} />
    </div>
  );
};

export default ScoreBar;
