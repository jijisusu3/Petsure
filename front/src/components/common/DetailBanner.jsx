import classes from './DetailBanner.module.css';
import React from 'react';

const DetailBanner = () => {
  return (
    <div className={classes.HeaderBanner}>
      <h4 className={classes.title}>
        상세 검색을 통해 <span style={{ fontWeight: '700' }}>최적의 보험</span>을 찾아드릴게요!
      </h4>
      <p className={classes.subtitle} style={{ fontSize: '20px' }}>
        간단한 설문을 통해 딱 맞는 보험을 추천 받아볼 수 있어요
      </p>
    </div>
  );
};

export default DetailBanner;
