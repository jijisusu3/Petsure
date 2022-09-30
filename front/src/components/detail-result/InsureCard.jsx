import { SureScore } from '../common/SureScore';
import Sheet from '../common/Sheet';
import React, { useState, useEffect } from 'react';
import classes from './InsureCard.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

export function CData() {
  const [datas, setDatas] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    // dispatch(prdActions.getPostDB());
    axios
      .post('/api/insurance/detail/', {
        breed: 31,
        animal_name: '이봉봉',
        species: 1,
        animal_birth: 2,
        hospitalization: 4,
        outpatient: 3,
        operation: 1,
        patella: 4,
        skin_disease: 3,
        dental: 2,
        urinary: 1,
        liability: 1,
      })
      .then(response => {
        setDatas(response.data.cover_ranking);
        setUser(response.data.detail_user);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return datas.map(data => (
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
              if (value > 2 && key == 1)
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
        <Link to={`${data.id}/${user}`} state={{ data }}>
          <button className={classes.compareButton}>상세보기</button>
        </Link>
        <button className={classes.compareButton}>비교하기</button>
      </div>
    </div>
  ));
}
export function PData() {
  const [datas, setDatas] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .post('/api/insurance/detail/', {
        breed: 31,
        animal_name: '이봉봉',
        species: 1,
        animal_birth: 2,
        hospitalization: 4,
        outpatient: 3,
        operation: 1,
        patella: 4,
        skin_disease: 3,
        dental: 2,
        urinary: 1,
        liability: 1,
      })
      .then(response => {
        setDatas(response.data.price_ranking);
        setUser(response.data.detail_user);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return datas.map(data => (
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
              if (value > 2 && key == 1)
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
        <Link to={`${data.id}/${user}`} state={{ data }}>
          <button className={classes.compareButton}>상세보기</button>
        </Link>
        <button className={classes.compareButton}>비교하기</button>
      </div>
    </div>
  ));
}
export function SData() {
  const [datas, setDatas] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .post('/api/insurance/detail/', {
        breed: 31,
        animal_name: '이봉봉',
        species: 1,
        animal_birth: 2,
        hospitalization: 4,
        outpatient: 3,
        operation: 1,
        patella: 4,
        skin_disease: 3,
        dental: 2,
        urinary: 1,
        liability: 1,
      })
      .then(response => {
        setDatas(response.data.sure_ranking);
        setUser(response.data.detail_user);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return datas.map(data => (
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
              if (value > 2 && key == 1)
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
        <Link to={`${data.id}/${user}`} state={{ data }}>
          <button className={classes.compareButton}>상세보기</button>
        </Link>
        <button className={classes.compareButton}>비교하기</button>
      </div>
    </div>
  ));
}
