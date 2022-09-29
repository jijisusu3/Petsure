import classes from './Banner.module.css';
import React from 'react';

const Banner = () => {
  return (
    <div className={classes.HeaderBanner}>
      <h4 className={classes.title}>우리 아이에게 맞는 보험을 찾아볼까요?</h4>
    </div>
  );
};

export default Banner;
