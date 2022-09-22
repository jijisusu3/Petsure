import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HeaderNav from './components/common/HeaderNav';
import FooterBar from './components/common/FooterBar';
import LandingPage from './pages/LandingPage';

import { useDispatch, useSelector } from 'react-redux';
import useInterval from './components/utils/hooks/useInterval';
import { createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';
import { AllInput } from './pages/petinsure/AllInput';
import { BasicInput } from './pages/petinsure/BasicInput';
import { BasicResult } from './pages/petinsure/BasicResult';
import { DetailResult } from './pages/petinsure/DetailResult';
import { InsureComparePage } from './pages/petinsure/insurecompare';
import { InsureDetail } from './pages/petinsure/InsureDetail';
import { DiseaseDict } from './pages/DiseaseDict';
import { AboutUs } from './pages/AboutUs';

const authPathSet = new Set([]);

function App() {
  const { pathname: path } = useLocation();
  const dispatch = useDispatch();

  // 사용 nav 설정
  // let selectedNav = <HeaderNav />;
  // if (authPathSet.has(path)) {
  //   if (
  //     path.includes('find-email') ||
  //     path.includes('find-password') ||
  //     path.includes('find-info')
  //   ) {
  //     selectedNav = <HeaderNavAuth color="black" />;
  //   } else {
  //     selectedNav = <HeaderNavAuth color="white" fixed />;
  //   }
  // } else {
  //   selectedNav = <HeaderNav />;
  // }

  // // token 여부 확인
  return (
    <>
      <HeaderNav />
      <main>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/basicinput" element={<BasicInput />} />
          <Route path="basicinput/basicresult" element={<BasicResult />} />
          <Route path="/allinput" element={<AllInput />} />
          <Route path="allinput/detailresult" element={<DetailResult />} />
          <Route path="allinput/insurecompare" element={<InsureComparePage />} />
          <Route path="allinput/insuredetail" element={<InsureDetail />} />
          <Route path="/diseasdict" element={<DiseaseDict />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </main>
      <FooterBar />
    </>
  );
}

export default App;
