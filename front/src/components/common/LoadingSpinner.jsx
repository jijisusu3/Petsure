import classes from './LoadingSpinner.module.css';

/// / loading Spinner /////////////////////////////////////
/// ///////////////////////////////////////////////////////
/// ///////////////////////////////////////////////////////

// loading_spinner_wrapper
// loading_spinner 자체의 센터를 잡아줍니다. (flex 적용)
// height 값은 해당 컴포너트를 감싸는 값을 그대로 받게됩니다.

// loading_spinner
// 1초 단위의 linear 무한 애니메이션
// 추후 다양한 디자인 적용

function LodingSpinner() {
  return (
    <div className={classes.loading_spinner_wrapper}>
      <div className={classes.loading_spinner} />
    </div>
  );
}

export default LodingSpinner;
