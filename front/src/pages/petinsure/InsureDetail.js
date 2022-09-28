// 보험상세보기
import Card from 'react-bootstrap/Card';
import { InsureCoverage } from '../../components/insure-detail/InsureCoverage';
import { AreSure } from '../../components/insure-detail/AreSure';
import classes from './InsureDetail.module.css';

export function InsureDetailPage() {
  // return <SettingsContainer />;
  return (
    <>
      <div className={classes.areSure}>
        <Card body>안에 내용 쭉 들어가야...</Card>;
        <div>
          <AreSure />
        </div>
        <InsureCoverage />
      </div>
      <div>프리티어방지</div>
    </>
  );
}
