import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './Star.css';
import classes from './InsureSurvey.module.css';

export default function InsureSurvey() {
  const current = decodeURI(window.location.href);
  const search = current.split('/')[6];
  const numSearch = Number(search);
  const location = useLocation();
  const insureId = Number(location.state.data.id);
  const insureUrl = location.state.data.insurance.company_url;
  const [survey, setSurvey] = useState('');

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
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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
        <button onClick={() => insurePage()}>가입 페이지로 이동</button>
      </a>
      <p>이 보험을 추천하시나요?</p>
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
      <p>의견남기기</p>
      <input
        type="text"
        onChange={e => {
          setSurvey(e.target.value);
        }}
      />
      <button onClick={() => register()}>제출</button>
    </div>
  );
}
