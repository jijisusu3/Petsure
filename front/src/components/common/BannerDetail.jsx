import classes from './Banner.module.css';
import React from 'react';

const Banner = () => {
  return (
    <div className={classes.HeaderBanner}>
      <h4 className={classes.title}>입력하신 정보에 대한 펫슈어 상세 검색 결과예요!</h4>
    </div>
  );
};

export default Banner;
