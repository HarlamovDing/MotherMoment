import './index.scss';
import './assets/fonts/fonts.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PostPage from './pages/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store'
import { Provider } from 'react-redux';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

