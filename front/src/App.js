import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HeaderNav from './components/common/HeaderNav';
import FooterBar from './components/common/FooterBar';
import LandingPage from './pages/LandingPage';

import { useDispatch, useSelector } from 'react-redux';
import useInterval from './components/utils/hooks/useInterval';
import { createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';
import { AllInputPage } from './pages/petinsure/AllInput';
import { BasicInputPage } from './pages/petinsure/BasicInput';
import { BasicResultPage } from './pages/petinsure/BasicResult';
import { DetailResultPage } from './pages/petinsure/DetailResult';
import { InsureComparePage } from './pages/petinsure/InsureCompare';
import InsureDetailPage from './pages/petinsure/InsureDetail';
import { DiseaseDictPage } from './pages/DiseaseDict';
import { AboutUsPage } from './pages/AboutUs';

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
          <Route path="/" element={<LandingPage />} />
          <Route path="/basicinput" element={<BasicInputPage />} />
          <Route path="basicinput/basicresult" element={<BasicResultPage />} />
          <Route path="/allinput" element={<AllInputPage />} />
          <Route path="allinput/detailresult" element={<DetailResultPage />} />
          <Route path="allinput/insurecompare" element={<InsureComparePage />} />
          <Route path="allinput/detailresult/:id" element={<InsureDetailPage />} />
          <Route path="/diseasdict" element={<DiseaseDictPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </main>
      <FooterBar />
    </>
  );
}

export default App;
