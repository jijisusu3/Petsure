import React from 'react';
import classes from './InsureCard.module.css';
import { Link } from 'react-router-dom';

import { SureScore } from '../common/SureScore';
import Sheet from '../common/Sheet';

const coverType = {
  0: '좋은상품',
  1: '통원치료비',
  2: '입원치료비',
  3: '수술치료비',
  4: '슬관절',
  5: '피부병',
  6: '구강',
  7: '비뇨기',
  8: '배상책임',
};

const CompareCard = ({ data, user, addToCompare, removeFromCompare, selected }) => (
  <div key={data.id} className={classes.insureCard}>
    <div>
      <img className={classes.insure_logo} alt="insure" src={data.insurance.company_logo} />
    </div>
    <div className={classes.titleBadge}>
      <h2>{data.insurance.insurance_name}</h2>
      <h5>보장내용</h5>
      <div>
        {data.all_cover &&
          data.all_cover.map((key, value) => {
            if (value > 3 && key == 1)
              return (
                <Sheet key={value} className={classes.badge} size="badge">
                  {coverType[value]}
                </Sheet>
              );
          })}
      </div>
    </div>
    <div className={classes.sureScore}>
      <h3>Sure점수</h3>
      <SureScore value={data.sure_score.toFixed(2)} />
      <h4>평균 70.34</h4>
    </div>
    <div>
      <h5>월{data.fee}원</h5>
      <Link to={`${user}/${data.id}`} state={{ data }}>
        <button className={classes.compareButton}>상세보기</button>
      </Link>
      {selected && selected.includes(data) ? (
        <button key={data.id} color="red" onClick={() => removeFromCompare(data)}>
          Remove
        </button>
      ) : (
        <button key={data.id} color="blue" onClick={() => addToCompare(data)}>
          Compare
        </button>
      )}
    </div>
  </div>
);

export default CompareCard;
