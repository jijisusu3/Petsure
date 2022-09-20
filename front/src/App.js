import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HeaderNav from './components/common/HeaderNav';

import LandingPage from './pages/LandingPage';

import { useDispatch, useSelector } from 'react-redux';
import useInterval from './components/utils/hooks/useInterval';
import { createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';

const authPathSet = new Set([]);

function App() {
  const { pathname: path } = useLocation();
  const dispatch = useDispatch();

  // 사용 nav 설정
  let selectedNav = '';
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
      {selectedNav}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/auth/find-info" element={<FindInfo />} />
          <Route path="/auth/find-email" element={<FindEmail />} />
          <Route path="/auth/find-password" element={<FindPassword />} />
          <Route path="/meeting" element={<Main />} />
          <Route path="/meeting/:roomId" element={<Meeting />} />
          <Route path="/settings/*" element={<SettingsPage />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="subscribe" element={<SubscribePage />} />
            <Route path="password" element={<PasswordPage />} />
            <Route path="heart" element={<HeartPage />} />
            <Route path="withdrawal" element={<WithdrawalPage />} />
            <Route path="*" element={<Navigate to="/settings/profile" replace />} />
          </Route> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
