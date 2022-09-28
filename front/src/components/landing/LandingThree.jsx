import classes from './LandingThree.module.css';

export default function LandingThree() {
  return (
    <div className={classes.landingThree}>
      <h1>우리 아이에게 딱 맞는 보험</h1>
      <p>펫슈어가 확실하게 찾아드릴게요!</p>
      <div className={classes.boxes}>
        <div className={classes.box}>하하하하</div>
        <div className={classes.box}>하하하하2</div>
        <div className={classes.box}>하하하하3</div>
      </div>
    </div>
  );
}
