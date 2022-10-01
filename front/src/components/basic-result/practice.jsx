import Sheet from '../common/Sheet';
import React, { useState, useEffect } from 'react';
import classes from './BasicCard.module.css';
import Button from '../common/Button';
import axios from 'axios';
import { Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResetTvOutlined } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

export default function BasicCard() {
  const [cdatas, setCdatas] = useState([]);

  // const use_for = arr => {
  //   const valuelist = [
  //     '통원치료비',
  //     '입원치료비',
  //     '수술치료비',
  //     '슬관절',
  //     '피부병',
  //     '구강',
  //     '비뇨기',
  //     '배상책임',
  //   ];

  //   for (let i = 0; i < arr.length; i++) {
  //     valuelist.push(arr[i]);
  //   }

  //   return arr;
  // };

  const valuelist = [
    '통원치료비',
    '입원치료비',
    '수술치료비',
    '슬관절',
    '피부병',
    '구강',
    '비뇨기',
    '배상책임',
  ];

  useEffect(() => {
    axios
      .post('/api/insurance/basic/', {
        breed: 31,
        animal_name: '이봉봉',
        species: 1,
        animal_birth: 2,
      })
      .then(response => {
        console.log(response.data);
        response.data.shift(); //응답으로 받은 배열의 0번째 요소 제거
        setCdatas(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {cdatas.map(cdata => (
        <div key={cdata.id}>
          <div className={classes.container}>
            <Sheet>
              <div>
                <table>
                  {cdata.cover.map(item => (
                    <tr key={cdatas.cover}>
                      <td colspan="2">{item.type}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </Sheet>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

{
  cdata.cover.map(item => (
    <tr key={item.id}>
      <td className={classes.basic_text_bold}>{item.type}</td>
      <td colspan="2" className={classes.basic_text_bold_right}>
        {item.type === null ? 'ㅡ' : (item.price * 10000).toLocaleString()}원
        {/* 존재할 경우로 바꾸기 */}
      </td>
    </tr>
  ));
}
