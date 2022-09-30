import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import StarRating from './Star';

export default function InsureSurvey() {
  const current = decodeURI(window.location.href);
  const search = current.split('/')[6];
  const location = useLocation();
  const [text, setText] = useState('');
  const register = () => {
    axios
      .post(`https://j7b202.p.ssafy.io/api/insurance/survey/`, {
        // eslint-disable-next-line prettier/prettier
  "user": search,
        // eslint-disable-next-line prettier/prettier
  "insurance_detail": location.id,
        // eslint-disable-next-line prettier/prettier
  "review": text,
        // eslint-disable-next-line prettier/prettier
  "score": 5
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onChange = e => {
    setText(e.target.value);
  };

  const [ratingValue, setRatingValue] = React.useState(0);

  return (
    <div>
      <button>가입 페이지로 이동</button>
      <p>이 보험을 추천하시나요?</p>
      <StarRating />
      <p>의견남기기</p>
      <input type="text" onChange={onChange} value={text} />
      <button onClick={() => register()}>제출</button>
    </div>
  );
}
