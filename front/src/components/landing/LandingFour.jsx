import classes from './LandingFour.module.css';
import { useNavigate } from 'react-router-dom';

export default function LandingThree() {
  const navigate = useNavigate();
  return (
    <div className={classes.landingFour}>
      <br />
      <br />
      <h1>그럼, 바로 상세 추천을 받아볼까요?</h1>
      <button style={{ marginTop: '30px' }}>맞춤 펫보험 알아보기</button>
    </div>
  );
}
