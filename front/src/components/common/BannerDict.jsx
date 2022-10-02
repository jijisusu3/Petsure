import classes from './BannerDict.module.css';
import React from 'react';

const BannerDict = () => {
  return (
    <div className={classes.HeaderBanner}>
      <h4 className={classes.title}>질병 상식</h4>
      <h5 className={classes.second_title}>반려동물이 대표적으로 앓는 증상들을 모아놨어요!</h5>
    </div>
  );
};

export default BannerDict;
