import React, { useState, useEffect } from 'react';
import classes from './BasicCard.module.css';

export default function BasicCard(insurance) {
  const insure = insurance.insurance;
  console.log(insure);

  const valuelist = [
    '통원치료비',
    '입원치료비',
    '수술치료비',
    '슬관절',
    '피부병',
    '구강',
    '비뇨기',
    '배상책임',
  ];

  const prices = valuelist.map(value =>
    insure.cover.filter(one => one.type === value)[0]
      ? insure.cover.filter(one => one.type === value)[0].price
      : '-',
  );

  return (
    <div className={classes.card}>
      <div>
        <img className={classes.basiclogo} src={insure.company_logo} alt="" />
      </div>
      <div className={classes.basicname}>{insure.insurance_name}</div>
      <div className={classes.basiccontents}>
        <div className={classes.basicleft}>
          {valuelist.map((value, index) => (
            <div className={classes.basictitle} key={index}>
              {value}
            </div>
          ))}
          <p style={{ color: '#F4AA41' }}>슈어 지수</p>
        </div>

        <div className={classes.basicright}>
          {prices.map((price, index) => (
            <div key={index} className={classes.basicsub}>
              {price === '-' ? (
                <div style={{ color: '#BABABA', fontWeight: '300' }}>{price}</div>
              ) : (
                (price * 10000).toLocaleString() + '원'
              )}
            </div>
          ))}
          <p style={{ color: '#F4AA41', fontWeight: '650', marginBottom: '20px' }}>
            상세 검색에서 보실 수 있어요!
          </p>
        </div>
      </div>
      <div className={classes.basicfee}>
        <p style={{ fontWeight: '700' }}>납입 보험료</p>
        <p style={{ fontWeight: '700', color: '#F4AA41' }}>
          {'월   ' + insure.fee.toLocaleString() + '원'}
        </p>
      </div>
      <button
        className={classes.basicbtn}
        onClick={() => window.open(insure.company_url, '_blank')}
      >
        가입 페이지로 이동
      </button>
      <div />
    </div>
  );
}
