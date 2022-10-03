import React from 'react';
import HorizonLine from '../common/HorizontalLine';
import { useLocation } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
import classes from './WeSure.module.css';
import Sheet from '../common/Sheet';
import { PieChart } from 'react-minimal-pie-chart';
import Grid from '@mui/material/Grid';
import { margin } from '@mui/system';

ChartJS.register(ArcElement, Tooltip, Legend);

export function WeSure() {
  const location = useLocation();
  const surveyScore = location.state.data.survey;
  const recommendItem = location.state.data.items;
  const surveyA = parseInt(surveyScore[0] * 100);
  const surveyB = parseInt(surveyScore[1] * 100);
  const surveyC = parseInt(surveyScore[2] * 100);
  const surveyD = parseInt(surveyScore[3] * 100);
  const surveyE = parseInt(surveyScore[4] * 100);

  const data = [
    { title: '추천해요', value: surveyA, color: '#92D3F5' },
    { title: '최고에요', value: surveyB, color: '#F0B622' },
    { title: '좋아요', value: surveyC, color: '#C0FA7C' },
    { title: '그냥 그래요', value: surveyD, color: '#C4ACFF' },
    { title: '별로에요', value: surveyE, color: '#C2D1CA' },
  ];
  const maxSurvey = Math.max(
    surveyScore[0],
    surveyScore[1],
    surveyScore[2],
    surveyScore[3],
    surveyScore[4],
  );

  const coverType = {
    0: '좋은상품',
    1: '통원치료비',
    2: '입원치료비',
    3: '수술치료비',
    4: '슬관절',
    5: '피부병',
    6: '구강',
    7: '비뇨기',
    8: '배상책임',
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        style={{ width: 800 }}
      >
        <p style={{ color: '#F0B622', fontWeight: 600, fontSize: 36 }}>
          We <span style={{ fontSize: 40, fontWeight: 630 }}>SURE !</span>
        </p>
        <p style={{ color: '#717171', fontSize: 22, fontWeight: 600 }}>
          당신에게 필요한{' '}
          <span style={{ fontSize: 30, color: '#F58613', fontWeight: 620 }}>추천 정보</span>
        </p>
      </Grid>
      <div className={classes.sureline} />
      <div style={{ marginLeft: 30 }}>
        <p style={{ fontSize: 20, fontWeight: 600, color: '#7A8982', marginBottom: 4 }}>
          유저 보험 평가
        </p>
        <span style={{ fontSize: 38, fontWeight: 700, marginBottom: 8 }}>
          다른 사람들은 이 보험을
        </span>
        <span style={{ fontSize: 40, fontWeight: 700, marginBottom: 8, color: '#F58613' }}>
          {(function () {
            if (maxSurvey == surveyScore[1]) {
              return ' 최고라고 생각해요 ! 😍';
            } else if (maxSurvey == surveyScore[0]) {
              return ' 추천해요 ! 😉';
            } else if (maxSurvey == surveyScore[2]) {
              return ' 괜찮다고 생각해요 ! 🙂';
            } else if (maxSurvey == surveyScore[3]) {
              return ' 그냥 그렇다고 생각해요 ! 🤨';
            } else if (maxSurvey == surveyScore[4]) {
              return ' 별로라고 생각해요 😓!';
            }
          })()}
        </span>
      </div>
      <div style={{ width: '60%', margin: 100, marginLeft: 150 }}>
        <PieChart
          data={data}
          paddingAngle={0}
          style={{ width: '500px', height: '540px' }}
          label={({ x, y, dx, dy, dataEntry }) => (
            <text
              x={x}
              y={y}
              dx={dx}
              dy={dy}
              dominant-baseline="central"
              text-anchor="middle"
              style={{
                fill: '#000',
                pointerEvents: 'none',
                fontSize: '4px',
                fontWeight: '600',
              }}
            >
              <tspan x={x} y={y} dx={dx} dy={dy}>
                {dataEntry.title}
              </tspan>
              <tspan x={x} y={y + 5} dx={dx} dy={dy}>{`${Math.round(dataEntry.value)}%`}</tspan>
            </text>
          )}
        />
      </div>

      <br />
      <br />
      <br />

      <div>
        <p style={{ fontSize: 20, fontWeight: 600, color: '#7A8982', marginLeft: 30 }}>
          보험에서 빠진 약관 영양제로 보충
        </p>
        <p style={{ fontSize: 38, fontWeight: 700, marginLeft: 30 }}>
          이 보험에서 빠진{' '}
          <span className={classes.h1_fontcolor_yellow}>
            {' '}
            {coverType[location.state.data.item_cover]} 관련{' '}
          </span>{' '}
          제품은 어떠세요? 🎁
        </p>
        <br />
        <div className={classes.width_max}>
          <Sheet>
            <div className={classes.item_tag}>
              <table>
                <tr>
                  <td className={classes.table_padding_1rem}>
                    <a href={recommendItem[0].item_url} target="_blank" rel="noreferrer">
                      <img className={classes.item_img} alt="item" src={recommendItem[0].image} />
                    </a>
                  </td>
                  <td className={classes.table_padding_1rem}>
                    <a href={recommendItem[1].item_url} target="_blank" rel="noreferrer">
                      <img className={classes.item_img} alt="item" src={recommendItem[1].image} />
                    </a>
                  </td>
                  <td className={classes.table_padding_1rem}>
                    <a href={recommendItem[2].item_url} target="_blank" rel="noreferrer">
                      <img className={classes.item_img} alt="item" src={recommendItem[2].image} />{' '}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className={classes.table_recom_product_text}>
                    <p>{recommendItem[0].name}</p>
                  </td>
                  <td className={classes.table_recom_product_text}>
                    <p>{recommendItem[1].name}</p>
                  </td>
                  <td className={classes.table_recom_product_text}>
                    <p>{recommendItem[2].name}</p>
                  </td>
                </tr>
              </table>
            </div>
          </Sheet>
        </div>
      </div>
    </>
  );
}
