// 상세검색결과
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { CData, SData, PData } from '../../components/detail-result/InsureCard';

export function DetailResultPage() {
  const [cdatas, setCdatas] = useState([]);
  const [pdatas, setPdatas] = useState([]);
  const [sdatas, setSdatas] = useState([]);
  useEffect(() => {
    axios
      .post('/api/insurance/detail', {
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
        setCdatas(response.data.cover_ranking);
        setPdatas(response.data.price_ranking);
        setSdatas(response.data.sure_ranking);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return (
    <Tabs defaultActiveKey="슈어 점수 순" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="슈어 점수 순" title="슈어 점수 순">
        <SData />
      </Tab>
      <Tab eventKey="낮은 가격 순" title="낮은 가격 순">
        <PData />
      </Tab>
      <Tab eventKey="많은 보장 순" title="많은 보장 순">
        <CData />
      </Tab>
    </Tabs>
  );
}
