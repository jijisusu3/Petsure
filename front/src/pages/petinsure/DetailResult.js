// 상세검색결과
import { InsureCard } from '../../components/detail-result/InsureCard';
import classes from './DetailResult.module.css';
import Sheet from '../../components/common/Sheet';
import React from 'react';
import axios from 'axios';

axios
  .get('api/insurance/detail/')
  .then(Response => {
    console.log(Response);
  })
  .catch(Error => {
    console.log(Error.response.data);
    console.log(Error.response.status);
    console.log(Error.response.headers);
  });

export function DetailResultPage() {
  return (
    <Sheet className={classes.insureCard}>
      <InsureCard />
    </Sheet>
  );
}
