import React from 'react';
import HorizonLine from '../common/HorizontalLine';
import { SureScore } from '../common/SureScore';

export function AreSure() {
  return (
    <>
      <h3>Are You SURE?</h3>
      <h4>이 보험 얼마나 확신할 수 있나요?</h4>
      <HorizonLine />
      <h1>이 보험의 슈어 점수</h1>
      <h5>'슈어 점수'는 아래의 세 가지 항목을 종합한 수치입니다.</h5>
      <h5>물음표 아이콘을 클릭하시면 각 지수에 대해 더 상세히 알려드려요!</h5>
      <SureScore value={88.33} />
      <HorizonLine />
    </>
  );
}
