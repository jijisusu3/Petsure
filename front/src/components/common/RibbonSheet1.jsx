import React from 'react';
import classes from './RibbonSheet.module.css';
import PropTypes from 'prop-types';

const RibbonSheet1 = ({ children, size, shallow, clickBlocked }) => {
  return (
    <div
      className={`${classes.ribbonsheet} ${size ? classes[size] : classes.large} ${
        shallow ? classes.shallow : ''
      } ${clickBlocked ? 'click-blocked' : ''}`}
    >
      <div className={`${classes.ribbon} ${classes['ribbon-top-left']}`}>
        {/* <span>ribbon</span> */}
        <span>상세 검색</span>
      </div>
      {children}
    </div>
  );
};

RibbonSheet1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shallow: PropTypes.bool,
  clickBlocked: PropTypes.bool,
};

export default RibbonSheet1;
