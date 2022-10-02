import Sheet from '../common/Sheet';
import React, { useState, useEffect } from 'react';
import classes from './BasicCard.module.css';
import Button from '../common/Button';
import axios from 'axios';
import { Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommentsDisabledOutlined, ResetTvOutlined } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

export default function BasicCard(insurance) {
  const insure = insurance.insurance;
  console.log(insure);
  console.log(insure.cover);

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

  const prices = valuelist.map(value =>
    insure.cover.filter(one => one.type === value)[0]
      ? insure.cover.filter(one => one.type === value)[0].price
      : '-',
  );
  console.log(prices);

  // const insurances = results.results.results;
  // console.log(insurances);
  // const [cdatas, setCdatas] = useState([]);
  // const [ddatas, setDdatas] = useState([]);

  // const navigate = useNavigate();

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

  // useEffect(() => {
  //   axios
  //     .post('/api/insurance/basic/', {
  //       breed: 31,
  //       animal_name: '이봉봉',
  //       species: 1,
  //       animal_birth: 2,
  //     })
  //     .then(response => {
  //       console.log(response.data);
  //       response.data.shift(); //응답으로 받은 배열의 0번째 요소 제거
  //       setCdatas(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className={classes.card}>
      <div>
        <img className={classes.cplogo} src={insure.company_logo} alt="" />
      </div>
      <div>{insure.insurance_name}</div>
      <div>
        <div>
          {valuelist.map((value, index) => (
            <div key={index}>{value}</div>
          ))}
          <p>슈어 지수</p>
        </div>

        <div>
          {prices.map((price, index) => (
            <div key={index}>{price}</div>
          ))}
          <p>상세 검색에서 보실 수 있어요!</p>
        </div>
        <div>
          <p>납입 보험료</p>
          <p>{insure.fee}</p>
        </div>
        <button onClick={() => window.open(insure.company_url, '_blank')}>
          가입 페이지로 이동
        </button>
        <div />
      </div>
    </div>
    // <div>
    //   {insurances.map(insurance => (
    //     <div key={insurance.id}>
    //       <Sheet size="medium">
    //         <div>
    //           <img src={insurance.company_logo} alt="" />
    //         </div>
    //         <div>{insurance.insurance_name}</div>
    //         <div>
    //           {valuelist.map(value => (

    //           ))}
    //         </div>
    //       </Sheet>
    //     </div>
    //   ))}

    // {
    /* <div className={classes.div_flex}>
        {cdatas.map(cdata => (
          <div key={cdata.id}>

            <div className={classes.flex_item}>
              <Sheet size="medium">
                <div>
                  <table>
                    <tr>
                      <td colSpan="2">
                        <div>
                          <img className={classes.basicLogo} src={cdata.company_logo} />
                        </div>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <div className={classes.basicInsuName}>{cdata.insurance_name}</div>
                      </td>
                    </tr>
                    {cdata.cover.map(item => (
                      <tr key={item.id}>
                        <td className={classes.basic_text_bold}>{item.type}</td>
                        <td colspan="2" className={classes.basic_text_bold_right}>
                          {item.type === null ? 'ㅡ' : (item.price * 10000).toLocaleString()}원

                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td className={classes.sure_yellow_text}>슈어지수</td>
                      <td className={classes.sure_yellow_text_right}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        상세 검색에서 보실 수 있어요!
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3">
                        <hr className={classes.hr_padding} />{' '}
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.basic_text_bold}>납입보험료</td>
                      <td className={classes.sure_yellow_text_right_size}>
                        월 {cdata.fee.toLocaleString()} 원
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2">
                        <div className={classes.div_flex}>
                          <Button
                            size="middle"
                            className={classes.basicButton}
                            text="가입 페이지로 이동"
                            onEvent={() => window.open([cdata.company_url], '_blank')}
                          />
                        </div>
                      </td>
                      <td />
                    </tr>
                  </table>
                </div>
              </Sheet>
            </div>
          </div>
        ))}
        ;
      </div> */
    // }
    // </div>
  );
}
