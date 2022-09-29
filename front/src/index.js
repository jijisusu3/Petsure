import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store, { persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/index.css';
import './styles/minireset.min.css';
import './styles/pretendard.css';
import App from './App';

// axios.defaults.baseURL = 'http://localhost:8000'
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
// axios.defaults.withCredentials = true;

window.addEventListener('unload', () => {
  // localStorage.removeItem('persist:root')
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  // </React.StrictMode>,
);
