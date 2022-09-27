// 상세검색결과
import { InsureCard } from '../../components/detail-result/InsureCard';
import classes from './DetailResult.module.css';
import Sheet from '../../components/common/Sheet';
import React from 'react';
import axios from 'axios';

export function DetailResultPage() {
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
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <Sheet className={classes.insureCard}>
      <InsureCard />
    </Sheet>
  );
}
