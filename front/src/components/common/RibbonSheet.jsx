import React from 'react';
import classes from './RibbonSheet.module.css';
import PropTypes from 'prop-types';
const RibbonSheet = ({ children, size, shallow, clickBlocked }) => {
  return (
    <div
      className={`${classes.ribbonsheet} ${size ? classes[size] : classes.large} ${
        shallow ? classes.shallow : ''
      } ${clickBlocked ? 'click-blocked' : ''}`}
    >
      <div className={`${classes.ribbon} ${classes['ribbon-top-left']}`}>
        {/* <span>ribbon</span> */}
        <span> Basic</span>
      </div>
      {children}
    </div>
  );
};

RibbonSheet.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shallow: PropTypes.bool,
  clickBlocked: PropTypes.bool,
};

export default RibbonSheet;

// Sheet-Component //////////////////////
////////////////////////////////////////
////////////////////////////////////////

// 컴포지션 전용 래퍼 컴포넌트
// 컴포지션이란 ??
// 참고
// https://velog.io/@beberiche/React-props-props.children
// size: 시트 패딩의 크기 (small: 16px, medium(default): 32px, large: 64px)
// shallow: 시트 그림자 범위 축소
// clickBlocked: 드롭다운 메뉴의 경우, 시트를 클릭했을 때 메뉴 비활성화 여부 (기본값은 false)

//참고

// const BasicInput = () => {
//     return (
//       <div className="flex_row_center">
//         <BasicInputForm />
//       </div>
//     );
//   };

//<div className={classes.groupContainer}></div>
