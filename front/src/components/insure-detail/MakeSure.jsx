import React from 'react';
import HorizonLine from '../common/HorizontalLine';
import { InsureCoverage } from './InsureCoverage';
import { InsureBasicAccordion, InsureSpecialAccordion } from './InsureAccordion';

export function MakeSure() {
  return (
    <>
      <h3>Make SURE?</h3>
      <h4>확실하게 알아보는 보장 내역</h4>
      <HorizonLine />
      <InsureCoverage />
      <div>
        <h5>상품의 보장 상세 내역</h5>
        <h1>이 보험에서 보장하는 내역이에요</h1>
      </div>
      <div>기본 약관</div>
      <InsureBasicAccordion />
      <br />
      <div>특별약관</div>
      <InsureSpecialAccordion />
    </>
  );
}
