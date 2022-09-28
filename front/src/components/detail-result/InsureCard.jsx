import { SureScore } from '../common/SureScore';
import Sheet from '../common/Sheet';
import React, { useState, useEffect } from 'react';
import classes from './InsureCard.module.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export function CData() {
  const [cdatas, setCdatas] = useState([]);
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
        console.log(response.data);
        setCdatas(response.data.cover_ranking);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return cdatas.map(cdata => (
    <div key={cdata.id} className={classes.insureCard}>
      <div>
        <img className={classes.insure_logo} alt="insure" src={cdata.insurance.company_logo} />
      </div>
      <div className={classes.titleBadge}>
        <h2>{cdata.insurance.insurance_name}</h2>
        <h5>보장내용</h5>
        <Sheet className={classes.badge} size="badge">
          슬개골
        </Sheet>
      </div>
      <div className={classes.sureScore}>
        <h3>Sure점수</h3>
        <SureScore value={cdata.sure_score.toFixed(2)} />
        <h4>평균 70.34</h4>
      </div>
      <div>
        <h5>월{cdata.fee}원</h5>
        <Button className={classes.detailButton}>상세보기</Button>
        <Button className={classes.compareButton}>비교하기</Button>
      </div>
    </div>
  ));
}
export function PData() {
  const [pdatas, setPdatas] = useState([]);
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
        setPdatas(response.data.price_ranking);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return pdatas.map(pdata => (
    <div key={pdata.id} className={classes.insureCard}>
      <div>
        <img className={classes.insure_logo} alt="insure" src={pdata.insurance.company_logo} />
      </div>
      <div className={classes.titleBadge}>
        <h2>{pdata.insurance.insurance_name}</h2>
        <h5>보장내용</h5>
        <Sheet className={classes.badge} size="badge">
          슬개골
        </Sheet>
      </div>
      <div className={classes.sureScore}>
        <h3>Sure점수</h3>
        <SureScore value={pdata.sure_score.toFixed(2)} />
        <h4>평균 70.34</h4>
      </div>
      <div>
        <h5>월{pdata.fee}원</h5>
        <Button className={classes.detailButton}>상세보기</Button>
        <Button className={classes.compareButton}>비교하기</Button>
      </div>
    </div>
  ));
}
export function SData() {
  const [sdatas, setSdatas] = useState([]);
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
        setSdatas(response.data.sure_ranking);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return sdatas.map(sdata => (
    <div key={sdata.id} className={classes.insureCard}>
      <div>
        <img className={classes.insure_logo} alt="insure" src={sdata.insurance.company_logo} />
      </div>
      <div className={classes.titleBadge}>
        <h2>{sdata.insurance.insurance_name}</h2>
        <h5>보장내용</h5>
        <Sheet className={classes.badge} size="badge">
          슬개골
        </Sheet>
      </div>
      <div className={classes.sureScore}>
        <h3>Sure점수</h3>
        <SureScore value={sdata.sure_score.toFixed(2)} />
        <h4>평균 70.34</h4>
      </div>
      <div>
        <h5>월{sdata.fee}원</h5>
        <Button className={classes.detailButton}>상세보기</Button>
        <Button className={classes.compareButton}>비교하기</Button>
      </div>
    </div>
  ));
}
