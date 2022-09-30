// 상세검색결과
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { CData, SData, PData } from '../../components/detail-result/InsureCard';

export function DetailResultPage() {
  return (
    <Tabs defaultActiveKey="슈어 점수 순" id="tab" className="mb-3">
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
