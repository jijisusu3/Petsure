import React from 'react';
import classes from './InsureCard.module.css';
import { Link } from 'react-router-dom';
import { SureScoreA } from '../common/SureScore';

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
  <div key={data.id} className={classes.mainbox}>
    <div className={classes.insureCard}>
      <img className={classes.insure_logo} alt="insure" src={data.insurance.company_logo} />
      <div className={classes.titleBadge}>
        <p className={classes.name}>{data.insurance.insurance_name}</p>
        <div className={classes.covbox}>
          <p className={classes.covtext}>보장내용</p>
          <div className={classes.covdiv}>
            {data.all_cover &&
              data.all_cover.map((key, value) => {
                if (value > 3 && key == 1)
                  return (
                    <div key={value} className={classes.badge} size="badge">
                      <p className={classes.badgetext}>{coverType[value]}</p>
                    </div>
                  );
              })}
          </div>
        </div>
      </div>
      <SureScoreA value={data.sure_score.toFixed(2)} />
      <div className={classes.colDiv}>
        <div className={classes.rowDiv}>
          <p className={classes.feetext}>월</p>
          <h3 className="fw-bold">{data.fee}</h3>
          <p className={classes.feetext}>원</p>
        </div>
        <Link to={`${user}/${data.id}`} state={{ data }}>
          <button className={classes.detailButton}>상세보기</button>
        </Link>
        {selected && selected.includes(data) ? (
          <button
            className={classes.compareButton}
            key={data.id}
            color="red"
            onClick={() => removeFromCompare(data)}
          >
            Remove
          </button>
        ) : (
          <button
            className={classes.compareButton}
            key={data.id}
            color="blue"
            onClick={() => addToCompare(data)}
          >
            Compare
          </button>
        )}
      </div>
    </div>
  </div>
);

export default CompareCard;
