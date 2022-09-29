// 보험상세보기
import { AreSure } from '../../components/insure-detail/AreSure';
import { MakeSure } from '../../components/insure-detail/MakeSure';
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
    <>
      <div className={classes.areSure}>
        <div className={classes.insureCard}>
          <img
            className={classes.insure_logo}
            alt="insure"
            src={location.state.data.insurance.company_logo}
          />
          <p>{location.state.data.name.substr(0, 2)}형</p>
          <p>{location.state.data.insurance.insurance_name}</p>
          <p>{location.state.data.insurance.content}</p>
          <p>납입 / 보험기간</p>
          <p>{location.state.data.insurance.payment_period}년</p>
          <p>월{location.state.data.fee}원</p>
          <button>보험금액계산하기</button>
        </div>
        ;
        <div>
          <AreSure />
          <MakeSure />
        </div>
      </div>
      <div>프리티어방지</div>
    </>
  );
};
export default InsureDetailPage;
