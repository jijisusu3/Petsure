import classes from './BasicResultBanner1.module.css';
import React from 'react';

const BasicResultBanner1 = () => {
  return (
    <div className={classes.HeaderBanner}>
      <h4 className={classes.title}>입력하신 정보에 대한 펫슈어 기본 검색 결과예요!</h4>
    </div>
  );
};

export default BasicResultBanner1;
