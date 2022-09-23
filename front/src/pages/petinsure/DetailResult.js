import { useEffect, useState } from 'react';
import { InsureCoverage } from '../../components/common/InsureCoverage';
import { DonutChart } from '../../components/common/SureScore';

export function DetailResultPage() {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <DonutChart value={70} />
      </div>
      <InsureCoverage />
    </>
  );
}
