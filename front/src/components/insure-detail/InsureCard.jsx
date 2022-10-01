import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import calc from '../../images/calc.svg';
import cal from '../../images/cal.svg';
import ret from '../../images/return.svg';

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
          <RowDiv>
            <img
              alt="insure"
              style={{ width: 200, height: 70, marginTop: 15 }}
              src={location.state.data.insurance.company_logo}
            />
            <div className="ms-5">
              <BasicText>{location.state.data.name.substr(0, 2)}형</BasicText>
              <h4 className="fw-bold pb-3">{location.state.data.insurance.insurance_name}</h4>
              <BasicText>{location.state.data.insurance.content}</BasicText>
            </div>
          </RowDiv>
          <div>
            <RowDiv>
              <BasicText className="pe-2">납입 / 보험기간</BasicText>
              <h5 className="fw-bold">{location.state.data.insurance.payment_period}년</h5>
            </RowDiv>
            <RowDiv>
              <BasicText className="pe-2">월</BasicText>
              <h3 className="fw-bold">{location.state.data.fee}원</h3>
            </RowDiv>
            <CalButton onClick={() => setflipped(true)}>
              <img src={calc} alt="img" className="pe-3" />
              <CalText className="fw-bold">보장 금액 계산하기</CalText>
            </CalButton>
          </div>
        </CardFront>
        <CardBack>
          <div>
            <img
              alt="insure"
              style={{ width: 200, height: 70 }}
              src={location.state.data.insurance.company_logo}
            />
            <RowDiv>
              <h3 className="fw-bold pt-3">{location.state.data.insurance.insurance_name}</h3>
              <BasicText>은?</BasicText>
            </RowDiv>
          </div>
          <div className="me-3">
            <div className="d-flex pb-3">
              <img src={cal} alt="" className="pe-3" />
              <BasicText>동물병원에서 통원치료비</BasicText>
            </div>
            <div className="d-flex pb-3">
              <Ipt type="number" onChange={onChange} value={text} />
              <BasicBtn onClick={() => register()}>원 청구 시</BasicBtn>
            </div>
            <CardBox>
              <h2 className="pe-2">{incentives}</h2>
              <BasicText>원 보장</BasicText>
            </CardBox>
          </div>
          <ReturnBtn className="ms-3" onClick={() => setflipped(false)}>
            <img src={ret} style={{ width: 40, height: 40 }} />
          </ReturnBtn>
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
  border-radius: 20px;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 2px solid #dddddd;
  box-shadow: 3px 3px 5px #dbdbdb;
`;
const CardInner = styled.div`
  // flex: 1;
  width: 1200px;
  height: 200px;
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
  display: flex;
  flex-direction: row;
`;

const CardBack = styled.div`
  ${CardSide}
  transform: rotateY(-180deg) translate(100%, 0);
  z-index: 1;
  display: flex;
  flex-direction: row;
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const CalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 250px;
  height: 50px;
  color: white;
  background-color: #f7f7f7;
  border: none;
  border-radius: 10px;
  margin-top: 1rem;
  box-shadow: 1px 1px 3px #dbdbdb;
  &:hover {
    box-shadow: 0 0 16px 0 #dbdbdb;
  }
`;
const CalText = styled.p`
  color: #5e6088;
`;

const BasicText = styled.p`
  display: flex;
  align-items: flex-end;
  color: #5b5b5b;
  font-size: 18px;
  font-weight: bold;
`;
const BasicBtn = styled.button`
  display: flex;
  align-items: flex-end;
  color: #5b5b5b;
  font-size: 18px;
  font-weight: bold;
  border: none;
  background-color: transparent;
  &:hover {
    color: #f4aa41;
  }
`;
const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4aa41;
  color: white;
  border-radius: 10px;
  width: 300px;
  height: 50px;
`;
const ReturnBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  border: none;
  background-color: transparent;
`;
const Ipt = styled.input`
  border-radius: 10px;
`;
