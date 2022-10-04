// 상세검색결과
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataComparison from '../../components/detail-result/InsureCard';
import { useLocation } from 'react-router';

export function DetailResultPage() {
  const [sDatas, setSDatas] = useState([]);
  const [pDatas, setPDatas] = useState([]);
  const [cDatas, setCDatas] = useState([]);
  const [user, setUser] = useState([]);
  const { state } = useLocation();
  useEffect(() => {
    setSDatas(state.sure_ranking);
    setPDatas(state.price_ranking);
    setCDatas(state.cover_ranking);
    setUser(state.detail_user);
  }, []);

  return <DataComparison sDatas={sDatas} pDatas={pDatas} cDatas={cDatas} user={user} />;
}
