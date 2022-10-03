// 상세검색결과
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataComparison from '../../components/detail-result/InsureCard';

export function DetailResultPage() {
  const [sDatas, setSDatas] = useState([]);
  const [pDatas, setPDatas] = useState([]);
  const [cDatas, setCDatas] = useState([]);
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
        console.log(response);
        setSDatas(response.data.sure_ranking);
        setPDatas(response.data.price_ranking);
        setCDatas(response.data.cover_ranking);
        setUser(response.data.detail_user);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return <DataComparison sDatas={sDatas} pDatas={pDatas} cDatas={cDatas} user={user} />;
}
