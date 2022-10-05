import React from 'react';
import classes from './InsureCompare.module.css';
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
        <p className={classes.nametext}>{data.name.substr(0, 2)}형</p>
        <p className={classes.name}>{data.insurance.insurance_name}</p>
        <div className={classes.covbox}>
          <p className={classes.covtext}>보장내용</p>
          <div className={classes.covdiv}>
            {data.all_cover &&
              data.all_cover.map((key, value) => {
                if (value > 3 && key == 1)
                  return (
                    <div key={value} className={classes.badge} size="badge">
                      <p>{coverType[value]}</p>
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
<<<<<<< HEAD
          <h3 className="fw-bold">{data.fee.toLocaleString()}</h3>
=======
          <h4 className="fw-bold mx-1">{data.fee}</h4>
>>>>>>> a45b46371879c59b493ac95e47a12a92c9e955d6
          <p className={classes.feetext}>원</p>
        </div>
        <Link to={`${user}/${data.id}`} state={{ data }}>
          <button className={classes.detailButton}>상세보기</button>
        </Link>
        {selected && selected.some(el => el.id === data.id) ? (
          <button
            className={classes.removeButton}
            key={data.id}
            color="red"
            onClick={() => removeFromCompare(data)}
          >
            선택취소
          </button>
        ) : (
          <button
            className={classes.compareButton}
            key={data.id}
            color="blue"
            onClick={() => addToCompare(data)}
          >
            비교하기
          </button>
        )}
      </div>
    </div>
  </div>
);

export default CompareCard;
