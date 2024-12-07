import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignInSide from './sign-in-side/SignInSide';
import SignUp from './sign-in-side/SignUpSide';
import DashBoard from './dashboard/Dashboard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* 登录页面路由 */}
        <Route path="/" element={<SignInSide />} />

        {/* 注册页面路由 */}
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashboard" element={<DashBoard />} />

      </Routes>
    </Router>
  </React.StrictMode>,
);
