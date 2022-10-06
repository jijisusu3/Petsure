import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './Star.css';
import classes from './InsureSurvey.module.css';

import Swal from 'sweetalert2';

export default function InsureSurvey() {
  const current = decodeURI(window.location.href);
  const search = current.split('/')[5];
  const numSearch = Number(search);
  const location = useLocation();
  const insureId = Number(location.state.data.id);
  const insureUrl = location.state.data.insurance.company_url;
  const [survey, setSurvey] = useState(null);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const register = () => {
    axios
      .post(`https://j7b202.p.ssafy.io/api/insurance/survey/`, {
        // eslint-disable-next-line prettier/prettier
        "user": numSearch,
        // eslint-disable-next-line prettier/prettier
        "insurance_detail": insureId,
        // eslint-disable-next-line prettier/prettier
        "review": survey,
        // eslint-disable-next-line prettier/prettier
        "score": hover
      })
      .then(function (response) {
        Swal.fire({
          title: '의견을 남겼습니다!',
          icon: 'success',
        });
      })
      .catch(function (error) {
        if (error.response.data === 'This survey already exists') {
          Swal.fire({
            title: '이미 의견을 남겼어요!',
            icon: 'error',
          });
        }
      });
  };

  const insurePage = () => {
    axios
      .put(`https://j7b202.p.ssafy.io/api/insurance/choice/`, {
        // eslint-disable-next-line prettier/prettier
        "user": numSearch,
        // eslint-disable-next-line prettier/prettier
        "insurance_detail": insureId,
        // eslint-disable-next-line prettier/prettier
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={classes.survey}>
      {/* 새창에서 띄우기 react.ver */}
      <a href={insureUrl} target="_blank" rel="noreferrer">
        <button className={classes.run} onClick={() => insurePage()}>
          가입 페이지로 이동
        </button>
      </a>
      <div className={classes.mainbox}>
        <p className={classes.rectext}>이 보험을 추천하시나요?</p>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? 'on' : 'off'}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onChange={e => {
                  setRating(e.target.value);
                }}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
        <hr />
        <p className={classes.rectext}>의견남기기</p>
        <input
          placeholder="의견이 없어도 괜찮아요!"
          className={classes.ip}
          type="text"
          onChange={e => {
            setSurvey(e.target.value);
          }}
        />
        {hover !== 0 && (
          <button className={classes.subbtn} onClick={() => register()}>
            제출
          </button>
        )}
        {hover === 0 && (
          <button className={classes.subbtndisabled} disabled={true}>
            제출
          </button>
        )}
      </div>
    </div>
  );
}
