// 보험상세보기
import { AreSure } from '../../components/insure-detail/AreSure';
import { MakeSure } from '../../components/insure-detail/MakeSure';
import { WeSure } from '../../components/insure-detail/WeSure';
import InsureCard from '../../components/insure-detail/InsureCard';
import InsureSurvey from '../../components/insure-detail/InsureSurvey';
import classes from './InsureDetail.module.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

// export function InsureDetailPage() {
//   // return <SettingsContainer />;
//   return (
//     <>
//       <div className={classes.areSure}>
//         <Card body>안에 내용 쭉 들어가야...</Card>;
//         <div>
//           <AreSure />
//           <MakeSure />
//         </div>
//       </div>
//       <div>프리티어방지</div>
//     </>
//   );
// }

export const InsureDetailPage = () => {
  const location = useLocation();
  return (
    <div className={classes.areSure}>
      <div className={classes.boxfixed}>
        <InsureSurvey />
      </div>
      <InsureCard />
      <AreSure />
      <MakeSure />
      <WeSure />
    </div>
  );
};
export default InsureDetailPage;
