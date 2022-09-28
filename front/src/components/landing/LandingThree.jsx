import { margin } from '@mui/system';
import classes from './LandingThree.module.css';

export default function LandingThree() {
  return (
    <div className={classes.landingThree}>
      <h1>우리 아이에게 딱 맞는 보험</h1>
      <p>펫슈어가 확실하게 찾아드릴게요!</p>
      <div className={classes.boxes}>
        <div className={classes.box1}>
          <img src="img/SureScore.svg" alt="" />
          <div className={classes.box}>
            <p className={classes.boxtitle}>슈어 점수를 확인하세요!</p>
            <p style={{ fontSize: '15px', marginTop: '20px', color: '#838383' }}>
              회사신뢰등급, 안심보장점수,
              <br /> 예상적합도를 종합한 점수로
              <br /> 펫슈어에서만 확인할 수 있답니다!
            </p>
          </div>
        </div>
        <div className={classes.box2}>
          <img src="img/detailselect.png" alt="" />
          <div className={classes.box}>하하하하2</div>
        </div>
        <div>
          <div className={classes.box}>하하하하2</div>
        </div>
      </div>
    </div>
  );
}
