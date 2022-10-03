import classes from './Banner.module.css';
import React from 'react';

const Banner = () => {
  return (
    <div className={classes.HeaderBanner}>
      <h4 className={classes.title}>우리 아이를 위한 보험을 검색해볼까요?</h4>
    </div>
  );
};

export default Banner;
