import React from 'react';
import HorizonLine from '../common/HorizontalLine';
import { InsureCoverage } from './InsureCoverage';

export function MakeSure() {
  return (
    <>
      <h3>Make SURE?</h3>
      <h4>확실하게 알아보는 보장 내역</h4>
      <HorizonLine />
      <h5>주력하고 있는 보장 상품</h5>
      <h1>이 상품은 수술치료비에 집중되어있어요!</h1>
      <InsureCoverage />
      <HorizonLine />
    </>
  );
}
