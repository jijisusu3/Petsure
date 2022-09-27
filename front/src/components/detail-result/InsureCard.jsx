import { SureScore } from '../common/SureScore';
import Sheet from '../common/Sheet';
import React from 'react';
import classes from './InsureCard.module.css';
import Button from 'react-bootstrap/Button';

const data = 70.35;

export function InsureCard() {
  return (
    <div className={classes.insureCard}>
      <div>
        <img
          className={classes.insure_logo}
          alt="insure"
          src="https://blog.kakaocdn.net/dn/lmjhi/btqB8oDRuQQ/JfqZ41bVWFDcn1a1kDk9m1/img.jpg"
        />
      </div>
      <div>
        <h2>보험이름들어가면될듯</h2>
        <h5>보장내용</h5>
        <Sheet className={classes.badge} size="badge">
          슬개골
        </Sheet>
      </div>
      <div className={classes.sureScore}>
        <h3>Sure점수</h3>
        <SureScore value={data} />
        <h4>평균 70.34</h4>
      </div>
      <div>
        <h5>월 19,000원</h5>
        <Button className={classes.detailButton}>상세보기</Button>
        <Button className={classes.compareButton}>비교하기</Button>
      </div>
    </div>
  );
}
