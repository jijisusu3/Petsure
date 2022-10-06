import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

export function DetailResultAxios() {
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
  return [sDatas, pDatas, cDatas, user];
}
