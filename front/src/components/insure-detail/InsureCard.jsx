import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const InsureCard = () => {
  const [flipped, setflipped] = useState(false);
  const location = useLocation();
  const [incentives, setIncentives] = useState([]);

  const [text, setText] = useState('');
  const insId = location.state.data.id;

  const register = () => {
    axios
      .get(`https://j7b202.p.ssafy.io/api/calc/${text}/${insId}`)
      .then(response => {
        console.log(response);
        setIncentives(response.data.result[0]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <CardContainer>
      <CardInner className={flipped ? 'flipped' : ''}>
        <CardFront>
          <img alt="insure" src={location.state.data.insurance.company_logo} />
          <p>{location.state.data.name.substr(0, 2)}형</p>
          <p>{location.state.data.insurance.insurance_name}</p>
          <p>{location.state.data.insurance.content}</p>
          <p>납입 / 보험기간</p>
          <p>{location.state.data.insurance.payment_period}년</p>
          <p>월{location.state.data.fee}원</p>
          <button onClick={() => setflipped(true)}>보장 금액 계산하기</button>
        </CardFront>
        <CardBack>
          <img alt="insure" src={location.state.data.insurance.company_logo} />
          <p>{location.state.data.insurance.insurance_name} 보험은?</p>
          <p>동물병원에서 통원치료비</p>
          <p>원 청구시</p>
          <input type="number" onChange={onChange} value={text} />
          <button onClick={() => register()}>확인</button>
          <p>{incentives}원</p>
          <button onClick={() => setflipped(false)}>뒤로가기</button>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};
export default InsureCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  // cursor: pointer;
  transition: z-index 500ms, transform 500ms;
  z-index: 0;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  transform-style: preserve-3d;
  &.flipped {
    z-index: 1;
  }
`;
const CardSide = css`
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 2px solid #dddddd;
`;
const CardInner = styled.div`
  // flex: 1;
  width: 500px;
  display: flex;
  transition: transform 500ms;
  transform-style: preserve-3d;
  &.flipped {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  ${CardSide}
  z-index: 0;
  background: white;
`;

const CardBack = styled.div`
  ${CardSide}
  transform: rotateY(-180deg) translate(100%, 0);
  background: #d7d7d7;
  z-index: 1;
`;
