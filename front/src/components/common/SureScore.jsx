import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const createChartData = (N, color) => {
  const data = [N, 3, 100 - N];
  const angle = 120;
  return {
    datasets: [
      {
        data,
        backgroundColor: [color, 'transparent', 'rgba(0, 0, 0, .1)'],
        cutout: '80%',
      },
    ],
    options: {
      animation: { duration: 0 },
      plugins: {
        tooltip: { enabled: false },
      },
      hover: { mode: null },
      legend: { display: false },
      rotation: -angle,
      circumference: angle * 2,
      borderWidth: 0,
    },
  };
};

export const DonutChart = ({ value }) => {
  const color = value > 90 ? '#50b840' : value < 30 ? '#eb5757' : '#F0B622';
  const data = createChartData(value, color);
  return (
    <div style={{ width: '250px', padding: '2rem', position: 'relative' }}>
      <Doughnut height="120px" data={data} options={data.options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
          color,
        }}
      >
        {value}
      </div>
    </div>
  );
};
