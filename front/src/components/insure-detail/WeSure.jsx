import React from 'react';
import HorizonLine from '../common/HorizontalLine';
import { useLocation } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import classes from './WeSure.module.css';
import Sheet from '../common/Sheet';

ChartJS.register(ArcElement, Tooltip, Legend);

export function WeSure() {
  const location = useLocation();
  const surveyScore = location.state.data.survey;
  const recommendItem = location.state.data.items;
  console.log(recommendItem[0].item_url);
  const data = {
    labels: ['추천해요', '최고에요', '좋아요', '그냥 그래요', '별로에요'],
    datasets: [
      {
        label: ['추천해요', '최고에요', '좋아요', '그냥 그래요', '별로에요'],
        data: [surveyScore[0], surveyScore[1], surveyScore[2], surveyScore[3], surveyScore[4]],
        backgroundColor: ['#92D3F5', '#7736EA', '#C0FA7C', '#C4ACFF', '#C2D1CA'],
        borderWidth: 1.5,
      },
    ],
  };
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
      <h3>We SURE do!</h3>
      <HorizonLine />
      <h5>유저 보험 평가</h5>
      <h1>다른 사람들은 이 보험을</h1>
      <h1>
        {(function () {
          if (maxSurvey == surveyScore[1]) {
            return '추천해요!';
          } else if (maxSurvey == surveyScore[0]) {
            return '최고에요!';
          } else if (maxSurvey == surveyScore[2]) {
            return '괜찮아요';
          } else if (maxSurvey == surveyScore[3]) {
            return '그냥그래요';
          } else if (maxSurvey == surveyScore[4]) {
            return '별로에요';
          }
        })()}
      </h1>
      <div style={{ width: '60%' }}>
        <Pie data={data} />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <h5 className={classes.h5_grey_font}>보험에서 빠진 약관 영양제로 보충</h5>
        <h1 className={classes.h1_padding_bolder}>
          이 보험에서 빠진{' '}
          <span className={classes.h1_fontcolor_yellow}>
            {' '}
            {coverType[location.state.data.item_cover]} 관련{' '}
          </span>{' '}
          제품은 어떠세요? 🎁
        </h1>
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
